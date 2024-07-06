const express = require("express");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const tableRoutes = require("./routes/table");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const redis = require("./config/redis");

const app = express();

dotenv.config();
const port = process.env.PORT || 4000;

database.connect();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:8000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

cloudinaryConnect();

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/table", tableRoutes);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
