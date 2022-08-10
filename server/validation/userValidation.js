const Joi = require("joi");

const loginSkeleton = {
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "il"] } })
    .required(),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9@$!%*?&]{3,30}$"))
    .required(),
};

registerSkeleton = {
  userName: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .min(2)
    .max(256)
    .required(),
  ...loginSkeleton,
  admin: Joi.boolean(),
  tel: Joi.string().required().min(9).max(11),
  city: Joi.string().max(30).required(),
  address: Joi.string().max(50).required(),
  apartment: Joi.string().max(20).required(),
  dliverExtra: Joi.string().max(255).allow(""),
};

const loginSchema = Joi.object(loginSkeleton);

const registerSchema = Joi.object(registerSkeleton);

module.exports = {
  loginSchema,
  registerSchema,
};
