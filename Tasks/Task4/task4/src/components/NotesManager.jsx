import NoteForm from "./NoteForm";
import NotesList from "./NotesList";

function NotesManager({ notes, addNote, editNote, deleteNote }) {
    return (
        <main className="p-4">
            <NoteForm addNote={addNote} />
            <NotesList
                notes={notes}
                editNote={editNote}
                deleteNote={deleteNote}
            />
        </main>
    );
}

export default NotesManager;
