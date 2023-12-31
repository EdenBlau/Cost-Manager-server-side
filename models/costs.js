// Moshe Dego 315044511
// Peleg Vadbeker 209485838
// Eden Blau 208571927
const mongoose = require("mongoose");

const cost = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["food", "health", "housing", "sport", "education", "transportation", "other"],
        required: true
    },
    sum: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('cost', cost);