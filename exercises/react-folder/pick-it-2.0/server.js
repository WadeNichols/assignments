const express = require("express")
const mongoose = require("mongoose")

require("dotenv").config();

const app = express(); 

//middleware
app.use(express.json());

//routes
app.use("/api/tabs", require("./routes/tabs"));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => console.log(`Connected to MongoDB`))
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))