const express = require("express")
const mongoose = require("mongoose")
const fs = require("fs")
const multer = require("multer")

const Image = require("./models/image.js")

require("dotenv").config()

const upload = multer ({
    dest: "./temp",
    limits: { fileSize: 1000000 }
})

const app = express();

app.use(express.json());

app.route("/api/images")
    .post(upload.single("file"), (req, res, next) => {
        console.log(req.file)
    })

    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: True}, () => `Connected to MongoDB`)
    app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))