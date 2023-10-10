// Import mongoose module
const mongoose = require('mongoose');
// Connect to local database
mongoose.connect('mongodb://127.0.0.1:27017/todo_list');
// Get the connection to the database
const database = mongoose.connection;

// Listen for any errors
database.on('error', err => console.error.bind(console, 'Error connecting to database'));

// Once database is successfully connected, log a message to the console
database.once('open', () => {
    console.log("Succesfully connected to database");
});