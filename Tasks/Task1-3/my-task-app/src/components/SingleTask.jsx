import React from 'react';

const SingleTask = ({ task, toggleCompletion }) => {
    return (
        <div className="bg-green-200 rounded p-4 mb-2">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button
                onClick={toggleCompletion}
                className={`mt-2 py-1 px-3 rounded ${task.isCompleted ? 'bg-green-500' : 'bg-red-500'} text-white`}
            >
                {task.isCompleted ? 'Completed' : 'Not Completed'}
            </button>
        </div>
    );
};

export default SingleTask;
