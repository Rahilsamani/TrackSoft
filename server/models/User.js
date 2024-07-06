const mongoose = require("mongoose");

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
        tableData: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "TableData",
          },
        ],
        totalWork: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
