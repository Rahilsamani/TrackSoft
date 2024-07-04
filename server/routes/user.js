const express = require("express");
const router = express.Router();
const {
  updateUser,
  getAllScreenshots,
  updateDailyProgress,
} = require("../controllers/User");
const { auth } = require("../middlewares/auth");

router.post("/updateUser", auth, updateUser);
router.get("/getScreenshots", auth, getAllScreenshots);
router.get("/updateProgress", auth, updateDailyProgress);

module.exports = router;
