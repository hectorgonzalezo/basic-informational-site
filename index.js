const http = require('http');
const path = require('path');
const fs = require('fs/promises');
const os = require('os');

const server = http.createServer(async (req, res) => {
  const pathname = path.join(__dirname, 'public', req.url);
  let fileExtension = path.extname(pathname);
  try {
    if (fileExtension === '') {
      if (req.url === '/') {
          file = await fs.readFile(pathname + 'index.html');
      } else {
        try {
        file = await fs.readFile(pathname + '.html');
        } catch(e) {
          file = await fs.readFile('./files/404.html');
        }
      }
      res.writeHead(200, {'Content-Type': 'text/html' })
      res.write(file);
      res.end();
      } else if (fileExtension === '.jpg' || fileExtension === '.css') {
        const type = fileExtension === '.jpg' ? 'image/jpeg' : 'text/css';
        file = await fs.readFile(pathname);
        res.writeHead(200, {'Content-Type': type })
        res.write(file);
        res.end();
      } 

  } catch (e) {
    file = `<h1>${e}</h1>`;
  }


});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));``