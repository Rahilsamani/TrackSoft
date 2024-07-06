const User = require("../models/User");

const updateUser = async (req, res) => {
  try {
    const { imageUrl, block } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (imageUrl != null) {
      user.screenshots.push(imageUrl);
    }

    if (block) {
      user.block = block;
    }

    await user.save();

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

module.exports = {
  updateUser,
  getAllScreenshots,
  updateDailyProgress,
  getUserDetails,
};
