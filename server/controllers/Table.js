const { TableData } = require("../models/TableData");
const User = require("../models/User");
const { calculateTotalWork } = require("../utils/calculateWork");

const createTableData = async (req, res) => {
  try {
    const { inTime, outTime } = req.body;
    const userId = req.user.id;

    if (!inTime || !outTime) {
      return res.status(400).json({
        success: false,
        message: "Please provide all details",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const totalWork = calculateTotalWork(inTime, outTime);

    const newTableData = await TableData.create({
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
