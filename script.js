var createTask = function(taskText, taskDate, taskList) {
    // create elements that make up a task item
    var taskLi 
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));

};


var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks")); 
    
    //if nothing in localStorage, create a new object to track all status arrays
    if (!tasks) {
        tasks = {
            toDo: [],
            inProgress:[],
            inReview: [],
            done: []
        };
    }

};




$("#task-form-modal .saveBtn").click(function() {

});