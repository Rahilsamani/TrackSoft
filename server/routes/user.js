const express = require("express");
const router = express.Router();
const {
  updateUser,
  getAllScreenshots,
  updateDailyProgress,
  getUserDetails,
  getUserCount,
} = require("../controllers/User");
const { auth } = require("../middlewares/auth");

router.post("/updateUser", auth, updateUser);
router.get("/getScreenshots", auth, getAllScreenshots);
router.post("/updateProgress", auth, updateDailyProgress);
router.get("/getUserDetails", auth, getUserDetails);
router.get("/getUserDetails", auth, getUserCount);

module.exports = router;
