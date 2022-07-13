const express = require("express");
require("./conn/mongo");
const app = express();
const port = 3000;
app.use(express.static("public"));

const {
  UserAccountInfo,
  UserOrderHistory,
  Product,
} = require("./models/myModel");

app.get("", (req, res) => {
  res.send("hello world");
});

app.post("/buyProduct", (req, res) => {
  res.send({ name: "Deependu Jha" });
});

app.listen(port, () => {
  console.log(`App started on http://localhost:${port}`);
});
