const express = require("express");
const router = express.Router();
const { createTableData } = require("../controllers/Table");
const { auth } = require("../middlewares/auth");

router.post("/createTableData", auth, createTableData);

module.exports = router;
