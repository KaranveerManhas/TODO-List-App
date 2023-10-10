// Importing mongoose module
const mongoose = require('mongoose');
// Defining Todo list database schema
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

// Creating new model todo 
const todo = mongoose.model('todo', todoSchema);

// Exporting todo module
module.exports = todo;