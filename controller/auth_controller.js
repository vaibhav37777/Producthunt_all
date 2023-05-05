const { response } = require("express");
const User = require("../model/user");
const userService = require("../service/user_services");

const bcrypt = require("bcrypt");

registerUser = async (req, res) => {
  try {
    let user = new User(req.body);
    let result = await userService.createUser(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

loginUser = async (req, res) => {
  try {
    const { email, password: inputpassword } = req.body;
    const user = await userService.getUserByEmail(email);
    console.log("user " + user);
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await bcrypt.compare(inputpassword, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    // const token = await userService.generateAuthToken(user);

    res.status(201).send({ message: "User logged in successfully" });
  } catch (error) {
    console.log("error in user post ", error);
    res.status(400).send({ message: error.message });
  }
};

module.exports = { loginUser, registerUser };
