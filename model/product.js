const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 30,
  },
  description: {
    type: String,
    required: true,
    maxlength: 300,
    trim: true,
  },
  url: {
    type: String,
    required: true,
  },
  shortDesc: {
    type: String,
    required: true,
    maxlength: 300,
    trim: true,
  },
  images: {
    type: Array,
    default: [],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdOn: {
    type: Date,
    default: date.now,
  },
  UpdatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  updatedOn: {
    type: Date,
    default: date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
