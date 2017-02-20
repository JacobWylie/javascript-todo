// Problem: User interaction doesn't provide desired results
// Solution: Add interactivity so the user can manage daily tasks

// Add a new task
	// When button is pressed
	// Create a new list item with the text from #new-task:
		// Iput checkbox
		// Label
		// Input (text)
		// Button.edit
		// Button.delete
		// Each element needs to be modified and appended

// Edit an existing task
	// When the edit button is pressed
		// If the class of the parent is .editMode
			// Switch from .editMode
			// Label text become the input's value
		// else
			// Switch to .editMode
			// Input value becomes the label's text

		// Toggle .editMode on the parent

// Delete an existing task
	// When the delete button is pressed
		// Remove parent list item from the ul 

// Mark a task complete
	// When the checkbox is checked
		// Append the task list item to the completed-tasks

// Mark a task as incomplete
	// When the checkbox is unchecked
		// Append to incomplete-tasks