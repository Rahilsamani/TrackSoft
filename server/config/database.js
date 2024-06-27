const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
      console.log("DB Connection Failed");
      console.log(error);
      process.exit(1);
    });
};
