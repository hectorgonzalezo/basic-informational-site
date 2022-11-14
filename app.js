const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs/promises');

const PORT = process.env.PORT || 3000;

const pathname = path.join(__dirname, 'public');

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(pathname + '/index.html');
} );

app.get("/about", (req, res) => {
  res.sendFile(pathname + '/about.html');
} );

app.get("/contact-me", (req, res) => {
  res.sendFile(pathname + '/contact-me.html');
} );

app.use((req, res, next) => {
  res.sendFile(pathname + '/404.html');
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
