const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    count: {
        required: true,
        type: Number
    },
    distance: {
        required: true,
        type: Number || String
    }
}, { timestamps: true })

module.exports = mongoose.model('Table', tableSchema)