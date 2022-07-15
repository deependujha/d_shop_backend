const express = require("express");
const router = new express.Router();
const { Product } = require("../models/myModel");

router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
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

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (e) {
    res.status(404).send({ data: e });
  }
});

router.post("/insert", async (req, res) => {
  try {
    const lap1 = new Product({
      product_id: "1001",
      product_name: "Legacy laptop",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 150,
      image: "/products/laptop/laptop_01.png",
    });
    const lap2 = new Product({
      product_id: "1002",
      product_name: "MacBook",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 450,
      image: "/products/laptop/laptop_02.png",
    });
    const lap3 = new Product({
      product_id: "1003",
      product_name: "Dell laptop",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 300,
      image: "/products/laptop/laptop_03.png",
    });
    const lap4 = new Product({
      product_id: "1004",
      product_name: "HP laptop",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 250,
      image: "/products/laptop/laptop_04.png",
    });
    const lap5 = new Product({
      product_id: "1005",
      product_name: "Legacy laptop",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 400,
      image: "/products/laptop/laptop_05.png",
    });

    const result = await Product.insertMany([lap1, lap2, lap3, lap4, lap5]);
    res.status(201).send(result);
  } catch (e) {
    res.status(404).send();
  }
});

module.exports = router;
