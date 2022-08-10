const ProductModel = require("../model/productModel");
const UserModel = require("../model/userModel");
const bcypt = require("../config/bcrypt");
const chalk = require("chalk");

const data = {
  users: [
    {
      userName: "user",
      email: "user@gmail.com",
      password: "123456789",
      city: "tel-aviv",
      address: "bavli",
      apartment: "18",
      dliverExtra: "leave in the electicity box near the door",
      fav: [],
      cart: [],
    },
    {
      userName: "admin",
      admin: true,
      email: "admin@gmail.com",
      password: "123456789",
      city: "tel-aviv",
      address: "bavli",
      apartment: "18",
      dliverExtra: "",
      fav: [],
      cart: [],
    },
    {
      userName: "David",
      email: "david@gmail.com",
      password: "123456789",
      city: "tel-aviv",
      address: "yerushalmi",
      apartment: "28",
      dliverExtra: "",
      fav: [],
      cart: [],
    },
  ],
  products: [
    {
      productName: "xk3000",
      productBarcode: 01,
      productMenufactor: "Gigabyte",
      productDescription: "bla bla",
      productImage: {
        url: "https://cdn.pixabay.com/photo/2012/03/04/00/50/board-22098_960_720.jpg",
        alt: "Pic Of Computer Part 1",
      },
      productCat: "cpu",
      productPrice: 199,
    },
    {
      productName: "I5-35770K",
      productBarcode: 02,
      productMenufactor: "intel",
      productDescription: "bla bla",
      productImage: {
        url: "https://cdn.pixabay.com/photo/2012/03/04/00/50/board-22098_960_720.jpg",
        alt: "Pic Of Computer Part 2",
      },
      productPrice: 199,
      productCat: "cpu",
      createdAt: Date.now(),
      lastUpdate: Date.now(),
      updatedby: "",
    },
    {
      productName: "z670e-d3",
      productBarcode: 03,
      productMenufactor: "Gigabyte",
      productDescription: "bla bla",
      productImage: {
        url: "https://cdn.pixabay.com/photo/2012/03/04/00/50/board-22098_960_720.jpg",
        alt: "Pic Of Computer Part 3",
      },
      productPrice: 199,
      productCat: "motherboard",
      createdAt: Date.now(),
      lastUpdate: Date.now(),
      updatedby: "",
    },
  ],
};

async function primaryUsers(user) {
  try {
    user.password = await bcypt.createHash(user.password);
    await UserModel.createUser(
      user.userName,
      user.admin,
      user.email,
      user.password,
      user.city,
      user.address,
      user.apartment,
      user.dliverExtra,
      user.fav,
      user.cart,
      user.createdAt
    );
  } catch (error) {
    console.log(chalk.redBright(error.message));
  }
}

async function primaryProducts(product) {
  try {
    await ProductModel.createProduct(product);
  } catch (error) {
    console.log(chalk.redBright(error.message));
  }
}

const primaryData = () => {
  primaryUsers(data.users[0]);
  primaryUsers(data.users[1]);
  primaryUsers(data.users[2]);

  primaryProducts(data.products[0]);
  primaryProducts(data.products[1]);
  primaryProducts(data.products[2]);
};

module.exports = primaryData;
