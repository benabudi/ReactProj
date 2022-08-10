const express = require("express");
const router = express.Router();
const productModel = require("../../model/productModel");
const UserModel = require("../../model/userModel");

router.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await productModel.findProductById(productId);
    if (!product) {
      res.status(400).json({
        status: 400.0,
        msg: "No Products with this id has been found!",
      });
    }
    const userArr = await UserModel.findUserByEmail(req.tokenData.email);
    if (!userArr.length) {
      res.status(400).json({ status: 400.1, msg: "No user has been found!" });
    }
    let usercart = userArr[0].cart;
    usercart.push(productId);
    userArr[0].cart = [...usercart];
    await UserModel.editUser(userArr[0].id, userArr[0]);

    res.json({
      status: 200,
      msg: "Product Added",
      cart: usercart,
    });
  } catch (error) {
    res.status(400).json({ status: 400, msg: error });
  }
});

module.exports = router;
