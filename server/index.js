const express = require("express");
const userRoutes = require("./routes/auth");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
const port = process.env.PORT || 4000;

database.connect();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

cloudinaryConnect();

// Routes
app.use("/api/v1/auth", userRoutes);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
