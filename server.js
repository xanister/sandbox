const http = require('http');
const fs = require('fs');
const version = fs.readFileSync(__dirname + '/VERSION', 'utf8').trim();
const port = Number(process.env.PORT || 3000);
http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200, { 'content-type': 'text/plain' }); res.end('ok'); return; }
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end('<!doctype html><title>fixture ' + version + '</title><h1 id="version">fixture version ' + version + '</h1><p>pid ' + process.pid + '</p>');
}).listen(port, () => console.log('fixture ' + version + ' listening on ' + port));
