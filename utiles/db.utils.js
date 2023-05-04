const mongoose = require("mongoose");
require("dotenv").config();

const initDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to database");
    })
    .catch((error) => {
      console.log("show error", error);
    });
};

module.exports = { initDB };
// const db = mongoose.connection;

// db.on("error", (error) => {
//   console.error("MongoDB connection error:", error);
// });

// db.once("open", () => {
//   console.log("MongoDB connected successfully!");
// });
