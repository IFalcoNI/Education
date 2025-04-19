import { useState, useEffect } from "react";
import Header from "./components/Header";
import NotesManager from "./components/NotesManager";
import FilterPanel from "./components/FilterPanel";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Work",
      text: "Do something",
      category: "Work",
    },
    {
      id: 2,
      title: "Study",
      text: "Learn something",
      category: "Study",
    },
    {
      id: 3,
      title: "Personal",
      text: "Eat something",
      category: "Personal",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredNotes, setFilteredNotes] = useState([]);

  const addNote = (newNote) => {
    newNote.category = newNote.category.trim();
    setNotes([...notes, newNote]);
  };

  const editNote = (id, updatedNote) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, ...updatedNote } : note
      )
    );
  };


  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filterNotes = () => {
    let filtered = [...notes];

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (note) => note.category.trim() === selectedCategory
      );
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (note) =>
          note.title.toLowerCase().includes(term) ||
          note.text.toLowerCase().includes(term)
      );
    }

    setFilteredNotes(filtered);
  };

  useEffect(() => {
    filterNotes();
  }, [notes, searchTerm, selectedCategory]);

  return (
    <div className="App">
      <div className="bg-green-300 text-white p-6">
        <h1 className="text-4xl">Notes App</h1>
      </div>
      <Header onSearch={setSearchTerm} />
      <FilterPanel
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <NotesManager
        notes={filteredNotes}
        addNote={addNote}
        editNote={editNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
