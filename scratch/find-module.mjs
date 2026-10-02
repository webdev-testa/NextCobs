import https from 'https';
import fs from 'fs';

const content = fs.readFileSync('C:/Users/LGSM123/.gemini/antigravity-cli/brain/dd2c03c5-5c4f-4405-9b75-256c2a7276af/.system_generated/steps/269/content.md', 'utf8');
const chunks = Array.from(content.matchAll(/src="(\/_next\/static\/chunks\/[^"]+)"/g)).map(m => m[1]);

async function findModule() {
  for (const c of chunks) {
    await new Promise(r => {
      https.get('https://aditya-gupta.com.np' + c, res => {
        let d = '';
        res.on('data', k => d += k);
        res.on('end', () => {
          if (d.includes('53348') || d.includes('runningCat') || d.includes('running-cat') || d.includes('cat.svg') || d.includes('cat.gif')) {
            console.log('Match in chunk:', c);
            const idx = d.indexOf('53348');
            if (idx !== -1) console.log('53348:', d.slice(idx - 100, idx + 400));
          }
          r();
        });
      });
    });
  }
}
findModule();
