import fs from 'fs';

const files = [
  './src/app/blogs/page.tsx',
  './src/app/blogs/[id]/page.tsx',
  './src/app/gallery/page.tsx'
];

const replacements = {
  // AC Servicing -> Working Tech/Plumbing image
  '1621360052063-eec32fe567b5': '1584622781564-1d987f7333c1',
  // Mattress Cleaning -> Working Cleaning image
  '1540350395377-5b651dd000bb': '1527515637462-cff94eecc1ac',
  // Renovation / Pre-Construction -> Working Construction image
  '1541888086425-d81bb19240f5': '1510627489930-0c1b0bfb6785',
  // Water Tank -> Working Cleaning/Tech image
  '1585728748176-455ac5eeddb3': '1584622650111-993a426fbf0a',
  // CCTV -> Working Tech/Electrical image
  '1557597774-9d273a264a85': '1621905252507-b35492cc74b4'
};

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  for (const [badId, goodId] of Object.entries(replacements)) {
    if (content.includes(badId)) {
      content = content.split(badId).join(goodId);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
console.log('Done!');
