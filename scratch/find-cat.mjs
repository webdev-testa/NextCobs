import https from 'https';
import fs from 'fs';

const content = fs.readFileSync('C:/Users/LGSM123/.gemini/antigravity-cli/brain/dd2c03c5-5c4f-4405-9b75-256c2a7276af/.system_generated/steps/269/content.md', 'utf8');
const chunks = Array.from(content.matchAll(/src="(\/_next\/static\/chunks\/[^"]+)"/g)).map(m => m[1]);
console.log('Found chunks count:', chunks.length);

async function checkChunk(chunkUrl) {
  return new Promise((resolve) => {
    https.get('https://aditya-gupta.com.np' + chunkUrl, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        if (data.toLowerCase().includes('cat') || data.includes('pointer-events-none z-10') || data.includes('top-20')) {
          console.log('\n--- Match in chunk:', chunkUrl);
          const i2 = data.indexOf('top-20');
          if (i2 !== -1) {
            console.log('Snippet around top-20:', data.slice(Math.max(0, i2 - 100), i2 + 800));
          }
          const catMatches = Array.from(data.matchAll(/cat/gi));
          for (const m of catMatches.slice(0, 5)) {
            console.log('Cat snippet:', data.slice(Math.max(0, m.index - 50), m.index + 100));
          }
        }
        resolve();
      });
    }).on('error', () => resolve());
  });
}

for (const c of chunks) {
  await checkChunk(c);
}
