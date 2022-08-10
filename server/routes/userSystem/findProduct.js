const express = require("express");
const router = express.Router();
const productModel = require("../../model/productModel");

router.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await productModel.findProductById(productId);
    res.json({
      status: 200,
      msg: "Product Found",
      _id: product._id,
      productName: product.productName,
      productBarcode: product.productBarcode,
      productMenufactor: product.productMenufactor,
      productDescription: product.productDescription,
      url: product.productImage.url,
      alt: product.productImage.alt,
      productPrice: product.productPrice,
      productCat: product.productCat,
      createdAt: product.createdAt,
      lastUpdate: product.lastUpdate,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: 400, msg: "No Products with this has been found!" });
  }
});

module.exports = router;
