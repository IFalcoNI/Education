import { useState } from "react";

function NoteForm({ addNote }) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [category, setCategory] = useState("Work");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !text) return;

        const newNote = {
            id: Date.now(),
            title,
            text,
            category,
            date: new Date().toLocaleString(),
        };
        addNote(newNote);
        setTitle("");
        setText("");
        setCategory("Work");
    };

    return (
        <form className="mb-4" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Note Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 border rounded w-full mb-2"
            />
            <textarea
                placeholder="Note Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="p-2 border rounded w-full mb-2"
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-2 border rounded mb-2"
            >
                <option value="Work">Work</option>
                <option value="Study">Study</option>
                <option value="Personal">Personal</option>
            </select>
            <button type="submit" className="bg-green-300 ml-2 text-white p-2 rounded">
                Add Note
            </button>
        </form>
    );
}

export default NoteForm;
