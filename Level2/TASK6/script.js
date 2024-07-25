function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
    if (taskText.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = createTaskItem(taskText);
    document.getElementById('pendingTasks').appendChild(taskItem);
    taskInput.value = '';
}

function createTaskItem(taskText, isCompleted = false) {
    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;

    const actionsDiv = document.createElement('div');

    if (!isCompleted) {
        const completeButton = document.createElement('button');
        completeButton.innerText = 'Complete';
        completeButton.className = 'complete';
        completeButton.onclick = () => completeTask(taskItem);
        actionsDiv.appendChild(completeButton);
    }

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.className = 'edit';
    editButton.onclick = () => editTask(taskItem);
    actionsDiv.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.onclick = () => deleteTask(taskItem);
    actionsDiv.appendChild(deleteButton);

    taskItem.appendChild(actionsDiv);

    return taskItem;
}

function completeTask(taskItem) {
    taskItem.classList.add('completed');
    document.getElementById('completedTasks').appendChild(taskItem);
    taskItem.querySelector('.complete').remove();
}

function editTask(taskItem) {
    const newTaskText = prompt('Edit task:', taskItem.firstChild.nodeValue);
    if (newTaskText) {
        taskItem.firstChild.nodeValue = newTaskText;
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}
