const express = require("express");
const router = express.Router();
const { createUser, getUserByEmail } = require("../controller/user_controller");

router.route("/").post(getUserByEmail);
router.route("/user").post(createUser);

module.exports = router;
