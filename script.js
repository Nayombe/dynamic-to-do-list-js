// Wait for the HTML document to fully load before executing any DOM operations
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task to the list
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();

        // Alert if input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign click event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to task item, then append item to the list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on "Enter" key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional: Call addTask on page load if needed
    // addTask();  // <- Not necessary unless preloading tasks
});

