const express = require("express");
const app = express();
const User = require("./model/user");
const userService = require("./service/user_services");
const Dbutils = require("./utiles/db.utils");
const userRouter = require("./routes/user_route");
const authRouter = require("./routes/auth_route");
require("dotenv").config();
Dbutils.initDB();
app.use(express.json());
const PORT = process.env.PORT || 3900;

app.use((req, res, next) => {
  console.log("Hello from middleware");
  next();
});
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

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
