import React, { useState } from 'react';
import TasksList from './TasksList';
import FormTask from './formTask';


const initialTasks = [
    { id: 0, title: "Task 1", description: "Sleep", isCompleted: false },
    { id: 1, title: "Task 2", description: "Eat", isCompleted: true },
    { id: 2, title: "Task 3", description: "Work", isCompleted: true },
    { id: 3, title: "Task 4", description: "Repeat", isCompleted: false }
];

const TasksContainer = () => {
    const [taskList, setTaskList] = useState(initialTasks);

    const addTask = (title, description) => {
        const newTask = {
            id: taskList.length,
            title: title,
            description: description,
            isCompleted: false
        };

        setTaskList(prevTasks => [...prevTasks, newTask]);
    };

    const toggleCompletion = (id) => {
        const updatedTasks = taskList.map((task, index) => {
            if (index === id) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            return task;
        });

        setTaskList(updatedTasks);
    };


    return (
        <div>
            <FormTask addTask={addTask} />
            <TasksList tasks={taskList} toggleCompletion={toggleCompletion} />
        </div>
    );
};

export default TasksContainer;
