const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPasword = await bcrypt.hash(this.password, salt);
    this.password = hashedPasword;
    next();
  } catch (err) {
    // throw err.message;
    next(err);
  }
});

module.exports = mongoose.model("User", userSchema);
