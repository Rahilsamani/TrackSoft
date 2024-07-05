const User = require("../models/User");

const updateUser = async (req, res) => {
  try {
    const { imageUrl, incrementCount } = req.body;
    const userId = req.user.id;

    const updateData = {
      $push: { screenshots: imageUrl },
    };

    if (incrementCount) {
      updateData.$inc = { count: 1 };
    }

    const user = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      user,
      message: "User updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while updating the user",
      error: error.message,
    });
  }
};

const getAllScreenshots = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const screenshots = user.screenshots || [];

    return res.status(200).json({
      success: true,
      screenshots,
      message: "Screenshots fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching screenshots of the user",
      error: error.message,
    });
  }
};

const updateDailyProgress = async (req, res) => {
  const date = new Date().toLocaleDateString();

  try {
    const userId = req.user.id;
    const { tableData } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    let todayProgress = user.progress.find(
      (progress) => progress.date === date
    );

    if (todayProgress) {
      todayProgress.tableData.push(tableData);

      const totalHours = todayProgress.tableData.reduce(
        (acc, data) => acc + data.workHours,
        0
      );

      todayProgress.totalWork = totalHours;
    } else {
      const newProgress = {
        date,
        tableData: [tableData],
        totalWork: tableData.workHours,
      };

      user.progress.push(newProgress);
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Progress updated successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while updating progress",
      error: error.message,
    });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).populate({
      path: "progress",
      populate: {
        path: "tableData",
        model: "TableData",
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      user,
      message: "User Details Fetched Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something Went wrong while fetching user details",
      error: error.message,
    });
  }
};

const getUserCount = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId).select("count");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      count: user.count,
      message: "User Count Fetched Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong While Fetching Users Count",
    });
  }
};

module.exports = {
  updateUser,
  getAllScreenshots,
  updateDailyProgress,
  getUserDetails,
  getUserCount,
};
