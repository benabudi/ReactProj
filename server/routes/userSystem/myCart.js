const express = require("express");
const router = express.Router();
const UserModel = require("../../model/userModel");
const ProductModel = require("../../model/productModel");

router.get("/", async (req, res) => {
  try {
    const userArr = await UserModel.findUserByEmail(req.tokenData.email);
    const cart = userArr[0].cart;
    const cards = [];
    for (let i = 0; i < cart.length; i++) {
      cards[i] = await ProductModel.findProductById(cart[i]);
    }
    return res.send(cards);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
