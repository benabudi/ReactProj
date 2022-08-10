const express = require("express");
const router = express.Router();

//! routes:
const middlewareRouter = require("../middleare/authMiddleware");
const registerRouter = require("./userSystem/register");
const loginRouter = require("./userSystem/login");
const findUserRouter = require("./userSystem/findUser");
const allProductsRouter = require("./userSystem/allProducts");
const findroductRouter = require("./userSystem/findProduct");
const myCartRouter = require("./userSystem/myCart");
const editUserRouter = require("./userSystem/edituser");
const addToCartRouter = require("./userSystem/addtocart");

//! routes Usage:
router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/allProducts", allProductsRouter);
router.use("/product", findroductRouter);
router.use("/my-cart", middlewareRouter, myCartRouter);
router.use("/edit-profile", middlewareRouter, editUserRouter);
router.use("/addtocart", middlewareRouter, addToCartRouter);

router.use("/find-user", middlewareRouter, findUserRouter);
module.exports = router;
