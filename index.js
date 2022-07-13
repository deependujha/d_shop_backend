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

app.post("/product", (req, res) => {
  const insertProd = async () => {
    try {
      const prd1 = new Product({
        product_id: 1234,
        product_name: "FaceWash",
        product_descr:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam architecto ratione doloremque vitae labore eveniet aut similique vel. Quia consequatur magnam, necessitatibus nostrum recusandae corrupti a eum unde fugit?",
        price: 4,
        image: "img1.jpg",
      });
      const prd2 = new Product({
        product_id: 2345,
        product_name: "Hair Oil",
        product_descr:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam architecto ratione doloremque vitae labore eveniet aut similique vel. Quia consequatur magnam, necessitatibus nostrum recusandae corrupti a eum unde fugit?",
        price: 7,
        image: "img1.jpg",
      });
      const prd3 = new Product({
        product_id: 3456,
        product_name: "I-pad",
        product_descr:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam architecto ratione doloremque vitae labore eveniet aut similique vel. Quia consequatur magnam, necessitatibus nostrum recusandae corrupti a eum unde fugit?",
        price: 100,
        image: "img1.jpg",
      });
      const prd4 = new Product({
        product_id: 4567,
        product_name: "MacBook",
        product_descr:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam architecto ratione doloremque vitae labore eveniet aut similique vel. Quia consequatur magnam, necessitatibus nostrum recusandae corrupti a eum unde fugit?",
        price: 200,
        image: "img1.jpg",
      });
      const prd5 = new Product({
        product_id: 5678,
        product_name: "I-phone",
        product_descr:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam architecto ratione doloremque vitae labore eveniet aut similique vel. Quia consequatur magnam, necessitatibus nostrum recusandae corrupti a eum unde fugit?",
        price: 200,
        image: "img1.jpg",
      });
      const result = await Product.insertMany([prd1, prd2, prd3, prd4, prd5]);
      console.log(result);
    } catch (e) {
      console.log(`error: ${e}`);
    }
  };
  insertProd();
  res.send("products inserted");
});

app.get("/product", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (e) {
    res.status(404).send({ data: e });
  }
});

app.get("/product/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    const product = await Product.find({ product_id: _id });
    if (!product) {
      res.status(404).send();
    } else {
      res.send(product);
    }
  } catch (e) {
    res.status(404).send({ data: e });
  }
});

app.post("/buyProduct", (req, res) => {
  res.send({ name: "Deependu Jha" });
});

app.listen(port, () => {
  console.log(`App started on http://localhost:${port}`);
});
