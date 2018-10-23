// npm init -y
// npm install express nodemon mongoose dotenv
// sorry the msg didn't send at first

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//middleware
app.use(express.json());
app.use("/api/candies", require("./routes/candies"));

//handle error middleware here
app.use((err, req, res, next) => {
    res.send({ message: err.message })
})

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => {
    console.log("Connected to MongoDB");
})

app.listen(process.env.PORT, () => {
    console.log("Connected on port " + process.env.PORT);
})