const mongoose = require("mongoose");

const tableDataSchema = new mongoose.Schema({
  inTime: {
    type: String,
    required: true,
  },
  outTime: {
    type: String,
    required: true,
  },
  totalWork: {
    type: String,
    required: true,
  },
});

const TableData = mongoose.model("TableData", tableDataSchema);
module.exports = { TableData, tableDataSchema };
