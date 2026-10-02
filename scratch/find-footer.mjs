import https from 'https';
import fs from 'fs';

const content = fs.readFileSync('C:/Users/LGSM123/.gemini/antigravity-cli/brain/dd2c03c5-5c4f-4405-9b75-256c2a7276af/.system_generated/steps/269/content.md', 'utf8');
const chunks = Array.from(content.matchAll(/src="(\/_next\/static\/chunks\/[^"]+)"/g)).map(m => m[1]);

async function search() {
  for (const c of chunks) {
    await new Promise(r => {
      https.get('https://aditya-gupta.com.np' + c, res => {
        let d = '';
        res.on('data', k => d += k);
        res.on('end', () => {
          if (d.includes('-top-20') || d.includes('overflow-visible') || d.includes('Cat')) {
            console.log('Found in chunk:', c);
            if (d.includes('overflow-visible')) {
              const idx = d.indexOf('overflow-visible');
              console.log('overflow-visible snippet:', d.slice(idx - 100, idx + 800));
            }
          }
          r();
        });
      });
    });
  }
}
search();
