// Problem: User interaction doesn't provide desired results
// Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

// New task list item
var createNewTaskElement = function(taskString) {
	// Create list item
	var listItem = document.createElement("li");
		// Input checkbox
		var checkBox = document.createElement("input");
		// Label
		var label = document.createElement("label");
		// Input (text)
		var editInput = document.createElement("input");
		// Button.edit
		var editButton = document.createElement("button");
		// Button.delete
		var deleteButton = document.createElement("button");
		// Each element needs modifying

		// Each element needs appending
		
		return listItem
}

// Add a new task
var addTask = function() {
	console.log("Add Task...");
	// Create a new list item with the text from #new-task:
	var listItem = createNewTaskElement("some new task");

	// Append listItem to incompleteTaskHolder

}

// Edit an existing task
var editTask = function() {
	console.log("Edit Task....");
	// When the edit button is pressed
		// If the class of the parent is .editMode
			// Switch from .editMode
			// Label text become the input's value
		// else
			// Switch to .editMode
			// Input value becomes the label's text

		// Toggle .editMode on the parent
}

// Delete an existing task
var deleteTask = function() {
	console.log("Delete Task...");
	// When the delete button is pressed
		// Remove parent list item from the ul 
}

// Mark a task complete
var taskCompleted = function() {
	console.log("Task Completed...");
	// When the checkbox is checked
		// Append the task list item to the completed-tasks
}

// Mark a task as incomplete
var taskIncomplete = function() {
	console.log("Task Incomplete...");
	// When the checkbox is unchecked
		// Append to incomplete-tasks
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log("Bind List Item Events...");
	// Select taskListItem's children
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
		// Bind editTask to edit button
	editButton.onclick = editTask;
		// Bind deleteTask to deleteButton
	deleteButton.onclick = deleteTask;
		// Bind checkBoxEventHandler to checkbox
	checkBox.onchange = checkBoxEventHandler;
}

// Set the click handler to the addTask function
addButton.onclick = addTask;

// Cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
	// Bind events to list item's childern (taskCompleted)
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted)
}

// Cycle over completeTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
	// Bind events to list item's children (taskIncomplete)
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}












































