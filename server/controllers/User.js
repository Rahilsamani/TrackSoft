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

module.exports = { updateUser };
