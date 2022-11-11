const http = require('http');
const path = require('path');
const fs = require('fs/promises');
const os = require('os');

const server = http.createServer(async (req, res) => {
  const pathname = req.url;
  let file;
  try {
    switch (pathname) {
      case "/":
        file = await fs.readFile(path.join(__dirname, "files", "index.html"));
        break;
      case "/about":
        file = await fs.readFile("./files/about.html");
        break;
      case "/contact-me":
        file = await fs.readFile("./files/contact-me.html");
        break;
      default:
        file = await fs.readFile("./files/404.html");
        break;
    }
  } catch (e) {
    file = `<h1>${e}</h1>`;
  }

  try {
  const style = await fs.readFile('./files/style.css');
  const img = await fs.readFile('./files/background.jpg');
  console.log(style)
  // res.writeHead(200, { 'Content-Type' : 'text/css'});
  // res.end(style);
  // res.writeHead(200, { 'Content-Type' : 'image/jpeg'});
  // res.end(img);
  } catch (e) {
    console.log(e);
  }
  res.writeHead(200, {'Content-Type': 'text/html' })
  res.write(file);
  res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));``