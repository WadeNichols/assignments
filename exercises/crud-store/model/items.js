const mongoose = require("mongoose");
const {Schema} = mongoose;

const itemSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
    },
    makesNoise: {
        type: Boolean,
        default: true
    },
    description: String
})

module.exports = mongoose.model("Item", itemSchema)