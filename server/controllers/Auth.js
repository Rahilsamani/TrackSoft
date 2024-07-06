const { uploadImageToCloudinary } = require("../utils/imageUploader");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signUp = async (req, res) => {
  try {
    // Fetch Data
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    const image = req.files?.image;

    // Data Validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !image
    ) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm Password are not matching",
      });
    }

    // User Already Exists or not
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User Already Exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // upload to cloudinary
    const profileImage = await uploadImageToCloudinary(
      image,
      process.env.FOLDER_NAME
    );

    // create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      image: profileImage.secure_url,
      screenshots: [],
      block: false,
    });

    // send response
    return res.status(200).json({
      success: true,
      user,
      message: "User Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating the user",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User is not registrered, please signup first",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const payload = {
        email: user.email,
        id: user._id,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      user.token = token;
      user.password = null;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "Logged in successfully",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login Failure, please try again",
      error: error.message,
    });
  }
};

module.exports = { signUp, login };
