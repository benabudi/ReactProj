const { required, alt } = require("joi");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productBarcode: {
    type: String,
    required: true,
    unique: true,
  },
  productMenufactor: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productImage: {
    url: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 1024,
      default:
        "https://pixabay.com/photos/board-card-chip-computer-data-22098/",
    },
    alt: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 256,
      default: "Pic Of Computer Part",
    },
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productCat: {
    type: String,
    required: true,
  },
  fav: {
    type: Array,
    required: true,
    default: [],
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  lastUpdate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const Product = mongoose.model("Products", productSchema);

const createProduct = (product) => {
  const newProduct = new Product(product);
  return newProduct.save();
};

const findProductByBarcode = (productBarcode) => {
  return Product.find({ productBarcode: productBarcode });
};

const findProductById = (productId) => {
  return Product.findById({ _id: productId });
};

const findAllProducts = () => {
  return Product.find();
};

const findAndEdit = (productBarcode) => {
  return Product.findOneAndUpdate({ productBarcode: productBarcode });
};

const editProduct = (productId, updatedProduct) => {
  return Product.findByIdAndUpdate(productId, updatedProduct);
};

const deleteProduct = (productId) => {
  return Product.findByIdAndDelete(productId);
};

module.exports = {
  createProduct,
  findProductByBarcode,
  findProductById,
  findAllProducts,
  findAndEdit,
  deleteProduct,
  editProduct,
};
