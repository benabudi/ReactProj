const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    minlength: 6,
    maxlength: 256,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 256,
  },
  tel: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 11,
  },
  city: {
    type: String,
    required: true,
    lowercase: true,
  },
  address: {
    type: String,
    required: true,
    lowercase: true,
  },
  apartment: {
    type: String,
    required: true,
    lowercase: true,
  },
  dliverExtra: {
    type: String,
    required: false,
  },
  admin: {
    type: Boolean,
    required: true,
    default: false,
  },

  cart: {
    type: Array,
    required: true,
    default: [],
  },
  cartPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const User = mongoose.model("Users", userSchema);

const createUser = (
  userName,
  admin,
  email,
  password,
  tel,
  city,
  address,
  apartment,
  dliverExtra,
  fav,
  cart,
  createdAt
) => {
  const newUser = new User({
    userName,
    admin,
    email,
    password,
    tel,
    city,
    address,
    apartment,
    dliverExtra,
    fav,
    cart,
    createdAt,
  });
  return newUser.save();
};

const findUserByEmail = (useremail) => {
  return User.find({ email: useremail });
};

const findUserById = (Id) => {
  return User.findOne(Id);
};

const editUser = (filter, updatedUser) => {
  return User.findByIdAndUpdate(filter, updatedUser);
};

module.exports = {
  createUser,
  findUserByEmail,
  editUser,
  findUserById,
};
