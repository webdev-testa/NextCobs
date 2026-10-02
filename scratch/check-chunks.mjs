import https from 'https';

const chunks = ['/_next/static/chunks/2pb_tvfcd3efz.js', '/_next/static/chunks/2hcodv8uw4evv.js', '/_next/static/chunks/1pby42i6dd7ie.js', '/_next/static/chunks/2ctq3ia7t3ypf.js'];

for (const c of chunks) {
  https.get('https://aditya-gupta.com.np' + c, res => {
    let d = '';
    res.on('data', k => d += k);
    res.on('end', () => {
      const catMatch = d.match(/cat[A-Za-z0-9_]*/gi);
      if (catMatch) console.log(c, 'cat matches:', Array.from(new Set(catMatch)).slice(0, 10));
      const svgMatch = d.match(/<svg[^>]*>[\s\S]{1,500}?<\/svg>/gi);
      if (svgMatch) console.log(c, 'svg count:', svgMatch.length);
    });
  });
}
