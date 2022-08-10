const jwt = require("../config/jwt");
const UserModel = require("../model/userModel");

module.exports = async (req, res, next) => {
  try {
    req.tokenData = await jwt.verifyToken(req.headers.token);
    const userArr = await UserModel.findUserByEmail(req.tokenData.email);
    const isAdmin = userArr[0].admin;
    if (isAdmin) next();
    else throw "You must be Admin to see this page";
  } catch (err) {
    res
      .status(400)
      .json({ status: 400, msg: "You must be Admin to see this page" });
  }
};
