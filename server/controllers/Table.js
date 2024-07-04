const { TableData } = require("../models/TableData");
const { calculateTotalWork } = require("../utils/calculateWork");

const createTableData = async (req, res) => {
  try {
    const { srNo, date, inTime, outTime } = req.body;

    if (!srNo || !date || !inTime || !outTime) {
      return res.status(400).json({
        success: false,
        message: "Please provide all details",
      });
    }

    const totalWork = calculateTotalWork(inTime, outTime);

    const newTableData = await TableData.create({
      srNo,
      date,
      inTime,
      outTime,
      totalWork,
    });

    return res.status(201).json({
      success: true,
      message: "Table data saved successfully",
      newTableData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while saving table data",
      error: error.message,
    });
  }
};

module.exports = { createTableData };
