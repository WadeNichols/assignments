const mongoose = require("mongoose");
const { Schema } = mongoose;

const candySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    eaten: {
        type: Boolean,
        default: false
    }
});

//to export our schema, (nameOfModel (singular), schema were basing it on)
module.exports = mongoose.model("Candy", candySchema)