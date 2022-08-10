const express = require("express");
const router = express.Router();
const ProductModel = require("../../model/productModel");
const ProductValidation = require("../../validation/productValidation");

router.put("/", async (req, res) => {
  try {
    let value = req.body;
    const productId = value.id;
    const isBarcodeExistArr = await ProductModel.findProductByBarcode(
      value.productBarcode
    );
    if (isBarcodeExistArr.length != 0) {
      if (isBarcodeExistArr[0]._id != value.id) {
        res
          .status(400)
          .json({ status: 400, msg: "Barcode in use of other product" });
      }
    }

    mapToModel = (product) => {
      const {
        productName,
        productBarcode,
        productMenufactor,
        productDescription,
        productImage: { url, alt },
        productPrice,
        productCat,
      } = product;
      return {
        productName,
        productBarcode,
        productMenufactor,
        productDescription,
        productImage: { url, alt },
        productPrice,
        productCat,
      };
    };
    value = mapToModel(value);

    value = await ProductValidation.productSchema.validateAsync(value, {
      abortEarly: false,
    });
    value.lastUpdate = Date.now();

    await ProductModel.editProduct(productId, value);

    res.json({ status: 200, msg: "Product updated!" });
  } catch (err) {
    res.status(400).json({ status: 400, msg: "No Product has been edited" });
  }
});

module.exports = router;
