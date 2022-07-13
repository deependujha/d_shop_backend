const express = require("express");
const router = new express.Router();
const { Product } = require("../models/myModel");

router.get("/:id", async (req, res) => {
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

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (e) {
    res.status(404).send({ data: e });
  }
});

module.exports = router;
