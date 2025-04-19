import { useState } from "react";

function NoteCard({ note, editNote, deleteNote }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(note.title);
    const [editedText, setEditedText] = useState(note.text);

    const handleSave = () => {
        editNote(note.id, {
            title: editedTitle,
            text: editedText,
        });
        setIsEditing(false);
    };

    return (
        <div className="border p-4 rounded mb-4">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        className="p-2 border rounded w-full mb-2"
                    />
                    <textarea
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        className="p-2 border rounded w-full mb-2"
                    />
                </div>
            ) : (
                <div>
                    <h3 className="text-xl font-bold">{note.title}</h3>
                    <p>{note.text}</p>
                </div>
            )}

            <small className="text-gray-500">{note.category}</small>

            <div className="mt-2">
                {isEditing ? (
                    <>
                        <button onClick={handleSave} className="mr-2 text-green-500">
                            Save
                        </button>
                        <button onClick={() => setIsEditing(false)} className="text-gray-500">
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="mr-2 text-green-500"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteNote(note.id)}
                            className="text-red-500"
                        >
                            Delete
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default NoteCard;
