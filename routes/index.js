// Importing express module
const express = require('express');
// Creating new instance of express router
const router = express.Router();
// Import home controller module
const homeController = require('../controllers/home_Controller');
// App home
router.get('/', homeController.home);
// Creating a todo item
router.post('/create_todo', homeController.createTodo);
// Deleting a todo item
router.post('/delete_todo', homeController.deleteTodo);
console.log('Router is Loaded');
// Exporting router module
module.exports = router;