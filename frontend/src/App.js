import "./App.css";
import React from "react";
import Notes from "./components/Notes";
import axios from "axios";

function App() {
  const [notes, setNotes] = React.useState([]);
  const getNotes = async () => {
    const response = await axios.get("http://localhost:5000/notes");
    setNotes(response.data.notes);
    console.log(response.data.notes);
  };

  React.useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="App container">
      <div class="sidebar">
        <h2 class="sidebar-title">NoteKeeper</h2>
        <label for="title" class="sidebar-label">
          Title
        </label>
        <input
          type="text"
          id="title"
          class="sidebar-input"
          placeholder="Enter titile"
        />
        <label for="description" class="sidebar-label">
          Description
        </label>
        <textarea
          type="text"
          id="description"
          class="sidebar-input-description"
          placeholder="Enter description"
        />
        <button class="sidebar-button">Add note</button>
      </div>
      <div className="separation-bar"></div>
      <>
        <Notes notes={notes} />
      </>
    </div>
  );
}

export default App;
