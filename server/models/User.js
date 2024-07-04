const mongoose = require("mongoose");
const { tableDataSchema } = require("./TableData");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      trim: true,
    },
    lastName: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    screenshots: [
      {
        type: String,
      },
    ],
    progress: [
      {
        date: {
          type: String,
          require: true,
        },
        tableData: [tableDataSchema],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
