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
    const ph1 = new Product({
      product_id: "1006",
      product_name: "Vivo smartphone",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 125,
      image: "/products/smartphone/phone_01.png",
    });
    const ph2 = new Product({
      product_id: "1007",
      product_name: "iPhone 13",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 350,
      image: "/products/smartphone/phone_02.png",
    });
    const ph3 = new Product({
      product_id: "1008",
      product_name: "lava phone",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 100,
      image: "/products/smartphone/phone_03.png",
    });
    const ph4 = new Product({
      product_id: "1009",
      product_name: "Samsung J2",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 150,
      image: "/products/smartphone/phone_04.png",
    });
    const ph5 = new Product({
      product_id: "1010",
      product_name: "iPhone13",
      product_descr:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ratione.",
      price: 750,
      image: "/products/smartphone/phone_05.png",
    });

    const result = await Product.insertMany([ph1, ph2, ph3, ph4, ph5]);
    res.status(201).send(result);
  } catch (e) {
    res.status(404).send();
  }
});

module.exports = router;
