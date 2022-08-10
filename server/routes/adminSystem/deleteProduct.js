const express = require("express");
const router = express.Router();
const ProductModel = require("../../model/productModel");

router.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await ProductModel.findProductById(productId);
    if (product) {
      await ProductModel.deleteProduct({ _id: productId });
      res.json({
        status: 200,
        msg: "Product Found And Deleted",
        msg: "Deleted Product:",
        name: product.productName,
        barcode: product.productBarcode,
        manufacturer: product.productMenufactor,
        description: product.productDescription,
        imgurl: product.productImage.url,
        imgalt: product.productImage.alt,
        Price: product.productPrice,
        category: product.productCat,
        createdAt: product.createdAt,
        lastUpdate: product.lastUpdate,
      });
    } else {
      throw "Product With Such Id Does Not Exist";
    }
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
});
module.exports = router;
