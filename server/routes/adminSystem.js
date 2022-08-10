const express = require("express");
const router = express.Router();

//! routes
const newProductRouter = require("./adminSystem/newProduct");
const deleteProductRouter = require("./adminSystem/deleteProduct");
const editProductRouter = require("./adminSystem/editProduct");

//! routes usage
router.use("/newProduct", newProductRouter);
router.use("/delete", deleteProductRouter);
router.use("/edit-product", editProductRouter);

module.exports = router;
