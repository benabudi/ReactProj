const express = require("express");
const router = express.Router();
const productModel = require("../../model/productModel");

router.get("/", async (req, res) => {
  try {
    const result = await productModel.findAllProducts();
    return res.send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
