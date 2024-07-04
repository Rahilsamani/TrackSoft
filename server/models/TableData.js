const mongoose = require("mongoose");

const tableDataSchema = new mongoose.Schema({
  srNo: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
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
