const mongoose = require("mongoose");

// const product = require("../model/product");
const user = require("../model/user");

exports.createProduct = async (product) => {
  //   const newUser = new product();
  try {
    const result = product.save();
    return result;
  } catch (error) {
    console.log(error);
  }
};
