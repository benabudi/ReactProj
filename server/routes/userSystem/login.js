const express = require("express");
const router = express.Router();
const UserValidation = require("../../validation/userValidation");
const UserModel = require("../../model/userModel");
const bcrypt = require("../../config/bcrypt");
const jwt = require("../../config/jwt");

router.post("/", async (req, res) => {
  try {
    const value = await UserValidation.loginSchema.validateAsync(req.body, {
      abortEarly: false,
    });
    const userArr = await UserModel.findUserByEmail(value.email);
    if (userArr.length != 0) {
      const isPassOk = await bcrypt.compareHash(
        value.password,
        userArr[0].password
      );
      if (isPassOk === true) {
        const token = await jwt.createToken({
          id: userArr[0].id,
          email: userArr[0].email,
          admin: userArr[0].admin,
        });
        res.json({
          status: 200,
          msg: `Email and Password are Ok, welcome back ${userArr[0].userName}`,
          token: token,
        });
      } else {
        throw "Email/password does not match to our db";
      }
    } else {
      throw "email/password does not match to our db";
    }
  } catch (err) {
    res.status(400).json({ status: 400, error: err });
  }
});

module.exports = router;
