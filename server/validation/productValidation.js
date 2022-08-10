const { joinClasses } = require("jade/lib/runtime");
const Joi = require("joi");

const productSkeleton = {
  productName: Joi.string().min(2).max(255).required(),
  productBarcode: Joi.string().required(),
  productMenufactor: Joi.string().min(2).max(255).required(),
  productDescription: Joi.string().min(10).required(),
  productImage: {
    url: Joi.string().min(6).max(1024),
    alt: Joi.string().min(2).max(256),
  },
  productCat: Joi.string().required(),
  productPrice: Joi.number().required(),
};
const productSchema = Joi.object(productSkeleton);

module.exports = {
  productSchema,
};
