const express = require("express");
const router = express.Router();
const UserModel = require("../../model/userModel");
const UserValidation = require("../../validation/userValidation");
const bcypt = require("../../config/bcrypt");
const { string } = require("joi");

router.put("/", async (req, res) => {
  try {
    const userArr = await UserModel.findUserByEmail(req.tokenData.email);
    const userId = userArr[0]._id;
    let value = req.body;
    if (!userArr[0].admin) {
      value.admin = false;
    }
    if (userArr[0].admin) {
      value.admin = true;
    }
    const isEmailExistArr = await UserModel.findUserByEmail(value.email);
    if (isEmailExistArr.length != 0) {
      if (isEmailExistArr[0]._id != value.id) {
        res
          .status(400)
          .json({ status: 400, msg: "Email in use of other user" });
      }
    }
    delete value.id;
    value = await UserValidation.registerSchema.validateAsync(value, {
      abortEarly: false,
    });
    value.password = await bcypt.createHash(value.password);
    await UserModel.editUser(userId, value);
    res.json({ status: 200, msg: "All Good!", response: update });
  } catch (err) {
    res.status(400).json({ status: 400, msg: "No User has been edited" });
  }
});

module.exports = router;
