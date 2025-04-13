import React from 'react';
import SingleTask from './SingleTask';

const TasksList = ({ tasks, toggleCompletion }) => {
    return (
        <div className="w-1/3 mx-auto mt-4">
            <ul>
                {tasks.map((task, index) => (
                    <li key={task.id}>
                        <SingleTask
                            task={task}
                            toggleCompletion={() => toggleCompletion(index)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TasksList;
