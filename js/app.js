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
		checkBox.type = "checkbox";
		editInput.type = "text";

		editButton.innerText = "Edit";
		editButton.className = "edit";
		deleteButton.innerText = "Delete";
		deleteButton.className = "delete";

		label.innerText = taskString;

		// Each element needs appending
		listItem.appendChild(checkBox);
		listItem.appendChild(label);
		listItem.appendChild(editInput);
		listItem.appendChild(editButton);
		listItem.appendChild(deleteButton);

		return listItem
}

// Add a new task
var addTask = function() {
	console.log("Add Task...");
	// Create a new list item with the text from #new-task:
	var listItem = createNewTaskElement(taskInput.value);
	// Append listItem to incompleteTaskHolder
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
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
	var listItem = this.parentNode; 
	var ul = listItem.parentNode;
	// Remove parent list item from the ul
	ul.removeChild(listItem);
}

// Mark a task complete
var taskCompleted = function() {
	console.log("Task Completed...");
	// Append the task list item to the completed-tasks
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}

// Mark a task as incomplete
var taskIncomplete = function() {
	console.log("Task Incomplete...");
	// Append to incomplete-tasks
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
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












































