const express = require("express");
const router = express.Router();
const { updateUser, getAllScreenshots } = require("../controllers/User");
const { auth } = require("../middlewares/auth");

router.post("/updateUser", auth, updateUser);
router.get("/getScreenshots", auth, getAllScreenshots);

module.exports = router;
