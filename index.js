const express = require("express");
require("./conn/mongo");
const app = express();
const port = 5000;

const productRouter = require("./router/product");
const orderRouter = require("./router/order_history");
const accountRouter = require("./router/account");

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use("/product", productRouter);
app.use("/order", orderRouter);
app.use("/account", accountRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`App Listening on http://localhost:${port}`);
});
