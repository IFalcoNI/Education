import React, { useState } from 'react';

const FormTask = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.length || !description.length) return;

        addTask(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center bg-green-300 p-4 rounded w-1/3 mx-auto mt-4">
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>
            <input
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mb-2 p-2 border bg-green-100 rounded w-full"
            />
            <input
                type="text"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mb-2 p-2 border bg-green-100 rounded w-full"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
            >
                Add Task
            </button>
        </form>
    );
};

export default FormTask;
