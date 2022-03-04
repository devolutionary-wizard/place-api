const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { urlencoded } = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//connect DB
dotenv.config();
const { connectDB } = require("./config/db");
connectDB();

//Category
const categoryRouter = require("./routes/category");
app.use("/api/categories", categoryRouter);
// Place
const placeRouter = require("./routes/place");
app.use("/api/places", placeRouter);

// Auth
const authRouter = require("./routes/auth");
app.use("/api/auth", authRouter);
// User
const userRouter = require("./routes/user");
app.use("/api/users", userRouter);

app.get("", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
