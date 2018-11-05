const mongoose = require("mongoose");

const {Schema} = mongoose;

const imageSchema = new Schema({
    filename: String,
    path: String,
    originalname: String
})

module.exports = mongoose.model("Image", imageSchema)