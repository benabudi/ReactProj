const express = require("express");
const router = express.Router();
const UserModel = require("../../model/userModel");
const ProductModel = require("../../model/productModel");

router.get("/", async (req, res) => {
  try {
    const userArr = await UserModel.findUserByEmail(req.tokenData.email);
    const user = userArr[0];
    return res.send(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
