const express = require("express");
const port = 3000;
const app = express();
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listen on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about-page.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home-page.html");
});
