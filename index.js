const express = require("express");
const app = express();
const User = require("./model/user");
const userService = require("./service/user_services");
const Dbutils = require("./utiles/db.utils");
require("dotenv").config();
Dbutils.initDB();
app.use(express.json());
const PORT = process.env.PORT || 3900;

app.get("/", (req, res) => {
  res.send("Hello World  this is good ");
});

app.post("/api/user", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  console.log(user);
  let result = await userService.createProduct(user);
  res.status(400).send(result);
});
app.listen(PORT, () => {
  console.log("port is running on port", PORT);
});
