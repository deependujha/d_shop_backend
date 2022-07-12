const express = require("express");
require('./conn/mongo')
const app = express();
const port = 3000;

app.get("", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`App started on http://localhost:${port}`);
});