const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//middleware
app.use(express.json());
app.use("/api/candies", require("./routes/candies"));
app.use("/api/flavors", require("./routes/flavors"));
app.use("/api/brands", require("./routes/brands"));

//handle error middleware here

app.use((err, req, res, next) => {
    if (err) res.send(err.message);
    else res.status(404).send({ message: "Not Found" })
})
app.use((req, res, next) => {
    if (req.xhr) res.status(404).send({ message: "Not Found" })
})

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => {
    console.log("Connected to MongoDB");
})

app.listen(process.env.PORT, () => {
    console.log("Connected on port " + process.env.PORT);
})