const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const multer = require("multer");
require("dotenv").config();

const Image = require("./models/image.js")

const upload = multer({
    dest: "./temp",
    limits: { fileSize: 1000000 }
})

const app = express();

app.use(express.json());

app.route("/api/images")
    .get((req, res, next) => {
        Image.find({}, (err, images) => {
            if (err) { next(err) }
            else res.status(200).send(images)
        })
    })
    .post(upload.single("file"), (req, res, next) => {
        // save image in server
        const newImage = new Image(req.file)
        newImage.save((err, savedFile) => {
            if (err) { next(err) }
            else res.status(201).send(savedFile);
        })
    })
app.route("/api/images/:filename")
    .get((req, res, next) => {
        res.sendfile(`./temp/${req.params.filename}`)
    })

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => `Connected to MongoDB`)
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))