const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors");

app.use(cors(corsOptions));

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const NewsLetterroutes = require("./home_page/routes/newsLetterRoutes");
const userRoutes = require("./Login/Routes/userRoute");

app.use("/api/newsLetter", NewsLetterroutes);
app.use("/user", userRoutes);

module.exports = app;