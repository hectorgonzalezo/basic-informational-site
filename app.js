const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs/promises');

const PORT = process.env.PORT || 3000;

const pathname = path.join(__dirname, 'public');

app.use(express.static("public"));

app.get("/", async (req, res) => {
  const file = await fs.readFile(pathname + '/index.html');
  res.sendFile(pathname + '/index.html');
} );

app.get("/about", async (req, res) => {
  const file = await fs.readFile(pathname + '/about.html');
  res.sendFile(pathname + '/about.html');
} );

app.get("/contact-me", async (req, res) => {
  const file = await fs.readFile(pathname + '/contact-me.html');
  res.sendFile(pathname + '/contact-me.html');
} );

app.use((req, res, next) => {
  res.sendFile(pathname + '/404.html');
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});