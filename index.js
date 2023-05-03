const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3900;

app.get("/", (req, res) => {
  res.send("Hello World  this is good ");
});

app.listen(PORT, () => {
  console.log("port is running on port", PORT);
});
