const { Schema, model } = require('mongoose');

const favLocationSchema = new Schema (
    {
        name: String,
        id: Number
    }
)

const favLocation = model('favLocation', favLocationSchema)

module.exports = favLocation;