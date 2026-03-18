import fs from 'fs';
import https from 'https';

const files = [
  './src/app/blogs/page.tsx',
  './src/app/blogs/[id]/page.tsx',
  './src/app/gallery/page.tsx'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, statusCode: res.statusCode });
    }).on('error', (e) => {
      resolve({ url, statusCode: 0, error: e.message });
    });
  });
}

async function main() {
  const allUrls = new Set();
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(/https:\/\/images\.unsplash\.com\/[^"'\s]+/g);
    if (matches) {
      for (const match of matches) {
        allUrls.add(match);
      }
    }
  }

  console.log(`Checking ${allUrls.size} unique URLs...`);
  
  for (const url of allUrls) {
    const result = await checkUrl(url);
    if (result.statusCode !== 200) {
      console.log(`BROKEN: ${result.statusCode} -> ${url}`);
    } else {
      console.log(`OK: 200 -> ${url}`);
    }
  }
}

main();
