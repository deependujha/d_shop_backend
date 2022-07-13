const express = require("express");
const router = express.Router();
const { UserAccountInfo } = require("../models/myModel");

router.get("/:addr", async (req, res) => {
  try {
    const data = await UserAccountInfo.find({ walletAddress: req.params.addr });
    if (!data) {
      res.status(404).send();
    } else {
      res.send(data);
    }
  } catch (e) {
    res.status(404).send();
  }
});

router.post("/", async (req, res) => {
  try {
    const userData = new UserAccountInfo(req.body);
    const result = await userData.save();
    res.send(result);
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
