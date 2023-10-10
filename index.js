// Import Express module
const express = require('express');
// Port on which app will run
const port = 8000;
// Creating an instance of app
const app = express();
// Import mongoose module
const db = require('./config/mongoose');
// Set view engine to ejs
app.set('view engine', 'ejs');
// Set views directory
app.set('views', './views');
// Using middleware to parse incoming requests
app.use(express.urlencoded());
// Serving static files to app 
app.use(express.static('assets'));
// Importing routes module, all requests from the root to be handled by this middleware
app.use('/', require('./routes'));


// Listening on Port 8000 for errors, if any
app.listen(port, function(err) {
    if (err) {
        console.log("Error :", err);
    }

    console.log(`Server is up and running on port ${port}`);
});