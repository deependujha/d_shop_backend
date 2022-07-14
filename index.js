const express = require("express");
require("./conn/mongo");
const app = express();
const port = 3000;

const productRouter = require("./router/product");
const orderRouter = require("./router/order_history");
const accountRouter = require("./router/account");

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use("/product", productRouter);
app.use("/order", orderRouter);
app.use("/account", accountRouter);

app.get("", (req, res) => {
  res.send("hello world");
});



app.listen(port, () => {
  console.log(`App started on http://localhost:${port}`);
});
