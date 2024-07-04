const User = require("../models/User");

const updateUser = async (req, res) => {
  try {
    // Fetch Data
    const { imageUrl } = req.body;
    const userId = req.user.id;

    if (!imageUrl) {
      return res.status(400).json({
        success: false,
        message: "Please Provide all the data required",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.screenshots.push(imageUrl);

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

    if (!tableData) {
      return res.status(400).json({
        success: false,
        message: "Invalid tableData format",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const todayProgress = user.progress.find(
      (progress) => progress.date === date
    );

    if (todayProgress) {
      todayProgress.tableData.push(tableData._id);
    } else {
      user.progress.push({
        date,
        tableData,
      });
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

module.exports = { updateUser, getAllScreenshots, updateDailyProgress };
