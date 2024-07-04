const express = require("express");
const router = express.Router();
const { updateUser } = require("../controllers/User");
const { auth } = require("../middlewares/auth");

router.post("/updateUser", auth, updateUser);

module.exports = router;
