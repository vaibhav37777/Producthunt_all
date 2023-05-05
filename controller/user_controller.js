const User = require("../model/user");
const userService = require("../service/user_services");

exports.createUser = async (req, res) => {
  try {
    let user = new User(req.body);
    await userService.createUser(user);
    res.status(201).send({ message: "User Created Succesfully" });
  } catch (error) {
    res.status(400).send({ Message: error.message });
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const { email, token } = req.body;
    if (!token || token !== "1234567") {
      throw new Error("Access Denied");
    } else {
      const user = await userService.getUserByEmail(email);
      if (!user) {
        throw new Error("User Not Found");
      }
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(400).send({ Message: error.message });
  }
};
