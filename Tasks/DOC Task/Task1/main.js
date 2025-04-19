class Task {
    constructor (description, priority) {
        this.description = description;
        this.status = 'new';
        this.priority = priority;
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }

    updatePriority(newPriority) {
        this.priority = newPriority;
    }
}

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    const statusFilter = document.getElementById('statusFilter').value;
    const priorityFilter = document.getElementById('priorityFilter').value;

    taskList.innerHTML = '';

    let filtered = tasks.filter(task =>
        (statusFilter === 'all' || task.status === statusFilter) &&
        (priorityFilter === 'all' || task.priority === priorityFilter)
    );

    filtered.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${task.description} [${task.status}, ${task.priority}] `;

        const statusSelect = document.createElement('select');
        ['new', 'in progress', 'done'].forEach(status => {
            const option = document.createElement('option');
            option.value = status;
            option.textContent = status;
            if (task.status === status) option.selected = true;
            statusSelect.appendChild(option);
        });

        statusSelect.addEventListener('change', () => {
            tasks[index].updateStatus(statusSelect.value);
            saveTasks();
            renderTasks();
        });

        const prioritySelect = document.createElement('select');
        ['high', 'medium', 'low'].forEach(priority => {
            const option = document.createElement('option');
            option.value = priority;
            option.textContent = priority;
            if (task.priority === priority) option.selected = true;
            prioritySelect.appendChild(option);
        });

        prioritySelect.addEventListener('change', () => {
            tasks[index].updatePriority(prioritySelect.value);
            saveTasks();
            renderTasks();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        li.appendChild(statusSelect);
        li.appendChild(prioritySelect);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const newTask = new Task(description, priority);
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    this.reset();
});

document.getElementById('sortBtn').addEventListener('click', () => {
    const order = { high: 1, medium: 2, low: 3 };
    tasks.sort((a, b) => order[a.priority] - order[b.priority]);
    saveTasks();
    renderTasks();
});

document.getElementById('statusFilter').addEventListener('change', renderTasks);
document.getElementById('priorityFilter').addEventListener('change', renderTasks);

renderTasks();
