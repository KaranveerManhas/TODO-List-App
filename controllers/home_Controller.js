// Get the todo list from the todo model
const todo_list = require('../models/todo');

async function getTodoList(){
    const todo = await todo_list.find({});
    return todo;
}

// Exporting Home module  
module.exports.home = function(req, res) {
    // Call function to get todo list then render homepage
    getTodoList().then(todo_List => {
        return res.render('home', {
            title: "TODO List || By Karanveer Singh",
            todo_List: todo_List
        });
    });
};

// Exporting createTodo module
module.exports.createTodo = (req, res) => {
    todo_list.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    });
    res.redirect('back');
}

// Function to delete item from database
async function deleteTodoItem(itemId) {
    await todo_list.findByIdAndDelete(itemId);
    return;
}

// Exporting deleteTodo module
module.exports.deleteTodo = (req, res) => {
    // Get the ids of the items to be deleted from req.body.id
    ids = req.query.id;
    // Form an array of ids
    idArray = ids.split(',');
    // For each array item, call the delete function which will delete todo list item from database
    for (let i = 0; i < idArray.length; i++) {
        deleteTodoItem(idArray[i]);
    }
    // redirect to homepage
    return res.redirect('back');
}