const express = require("express");
const app = express();
const bodyParser = require("body-parser")

// app.get('/',(req , res) =>{
//     res.send("Hello World.!")
// })


// app.get("/blog", (req, res) => {
//   res.send("Hello blog!");
// });


const NewsLetterroutes = require("./home_page/routes/newsLetterRoutes");

app.use(bodyParser.json());

app.use("/api/newsLetter", NewsLetterroutes);

module.exports = app;