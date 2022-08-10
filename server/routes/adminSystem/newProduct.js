const express = require("express");
const router = express.Router();
const ProductModel = require("../../model/productModel");
const ProductValidation = require("../../validation/productValidation");

router.post("/", async (req, res) => {
  try {
    const value = await ProductValidation.productSchema.validateAsync(
      req.body,
      { abortEarly: false }
    );
    const isBarcodeExistArr = await ProductModel.findProductByBarcode(
      value.productBarcode
    );
    if (isBarcodeExistArr.length != 0) {
      throw "there is a product with the same barcode id";
    } else {
      const newProduct = await ProductModel.createProduct({
        productName: value.productName,
        productBarcode: value.productBarcode,
        productMenufactor: value.productMenufactor,
        productDescription: value.productDescription,
        productImage: {
          url: value.productDescription.url
            ? value.productDescription.url
            : "https://cdn.pixabay.com/photo/2012/03/04/00/50/board-22098_960_720.jpg",
          alt: value.productDescription.alt
            ? value.productDescription.alt
            : "Pic Of Computer Part",
        },
        productCat: value.productCat,
        productPrice: value.productPrice,
        lastUpdate: Date.now(),
      });
      res.json({ status: 200, product: newProduct });
    }
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
});

module.exports = router;
