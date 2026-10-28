import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const port = Number(process.env.PORT ?? 8080);
const html = fs.readFileSync(path.join(import.meta.dirname, 'ui-verdict-fixture.html'), 'utf8');

http
  .createServer((_req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  })
  .listen(port, () => console.log(`fixture on :${port}`));
