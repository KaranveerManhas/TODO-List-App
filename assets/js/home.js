// Get list items
const listItems = document.getElementsByClassName('cat');
// For each list item add color classes to their category accordingly
for (let i of listItems){
    // i.classList.add('personal');
    if(i.innerText == 'Personal'){
        i.classList.add('personal');
    } else if(i.innerText == 'Work'){
        i.classList.add('work');
    } else if(i.innerText == 'Cleaning'){
        i.classList.add('cleaning');
    } else if(i.innerText == 'School'){
        i.classList.add('school');
    } else if(i.innerText == 'Other'){
        i.classList.add('other');
    }
};

// This function is triggered when the user checks any checkbox in the todo list
function checkedOrNot() {
    let checkboxes = document.querySelectorAll('.list-check'); //get all the checkboxes
    let listItemDescription = document.querySelectorAll('.todo-desc'); //get all the list item descriptions
    let listItemDueDate = document.querySelectorAll('.due-date'); // get all the list item due dates

    // For each checkbox, check if it is checked
    // If it is checked, then add the crossed-off class to the description and 
    // due date div of the list item. Else, remove the crossed-off class.
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) {
            listItemDescription[i].classList.add('crossed-off');
            listItemDueDate[i].classList.add('crossed-off');
        } else if (checkboxes[i].checked == false) {
            if (listItemDescription[i].classList.contains('crossed-off')){
            listItemDescription[i].classList.remove('crossed-off');
            listItemDueDate[i].classList.remove('crossed-off');
            }
        }
    }
}

// Adding an event listener to the delete tasks button 
document.getElementById('delete-items').addEventListener('click', (event) => {
    // Prevent default behavior of submitting the form
    event.preventDefault();
    // Checked checkboxes
    let checkedCheckboxes = document.querySelectorAll('.list-check:checked');
    // console.log(checkedCheckboxes);
    // Array of items to be deleted from list
    let deletedArray = [];
    // Each checkbox has an id attribute that corresponds to the id of the list item in the database.
    // So we can store all the ids of the list items that need to be deleted from the database and the list
    for (let i of checkedCheckboxes) {
        deletedArray.push(i.getAttribute('id'));
    }
    // If user hasn't selected any list item, then display error message
    if(deletedArray.length == 0) {
        window.alert('No Item is Selected, Please select an item');
        return;
    }
    // Ajax request to delete the items, passing the deletedArray in the url, which will be parsed in the deleteTodo module of the homeController.
    $.ajax({
        type: 'POST',
        url:'/delete_todo/?id='+deletedArray,
        success: 
        window.location = '/'
    });
})