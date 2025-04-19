import NoteCard from "./NoteCard";

function NotesList({ notes, editNote, deleteNote }) {
    return (
        <div>
            {notes.map((note) => (
                <NoteCard
                    key={note.id}
                    note={note}
                    editNote={editNote}
                    deleteNote={deleteNote}
                />
            ))}
        </div>
    );
}

export default NotesList;
