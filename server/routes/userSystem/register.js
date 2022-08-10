const express = require("express");
const router = express.Router();
const UserValidation = require("../../validation/userValidation");
const bcypt = require("../../config/bcrypt");
const UserModel = require("../../model/userModel");

router.post("/", async (req, res) => {
  try {
    const value = await UserValidation.registerSchema.validateAsync(req.body, {
      abortEarly: false,
    });
    value.password = await bcypt.createHash(value.password);
    const isEmailExistArr = await UserModel.findUserByEmail(value.email);
    if (isEmailExistArr.length != 0) {
      throw "This email is already exist";
    } else {
      await UserModel.createUser(
        value.userName,
        value.admin,
        value.email,
        value.password,
        value.tel,
        value.city,
        value.address,
        value.apartment,
        value.dliverExtra,
        value.fav,
        value.createdAt
      );
    }

    res.json({ status: 200, msg: "All Good!", response: value });
  } catch (err) {
    res.status(400).json({ status: 400, error: err });
  }
});

module.exports = router;
