import "./App.css";
import React from "react";
import Notes from "./components/Notes";
import axios from "axios";
import Sidebar from "./components/Sidebar";

function App() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [notes, setNotes] = React.useState([]);
  const [edit, setEdit] = React.useState(false);
  const [EditNoteId, setEditNoteId] = React.useState(null);

  // Getting notes from the backend
  const getNotes = async () => {
    const response = await axios.get("http://localhost:5000/notes");
    setNotes(response.data.notes);
    console.log(response);
  };

  React.useEffect(() => {
    getNotes();
  }, []);

  // Function to add a note
  const AddNote = async () => {
    console.log(title);
    console.log(description);
    // Make an API call to send created note.
    const response = await axios.post("http://localhost:5000/createNote", {
      title,
      description,
    });
    // After adding the note to db - get response of updated nptes from db
    setNotes(response.data.notes);
    setTitle("");
    setDescription("");
  };
  // Function to edit a note

  const EditNote = async (id) => {
    setEdit(true); // change the sidebar add button to edit
    setEditNoteId(id); // that id will send to sidebar where we can hit API call, after changes the stuff
    const GetNoteOfParticularId = notes.find((note) => note.id === id);
    setTitle(GetNoteOfParticularId.title);
    setDescription(GetNoteOfParticularId.description);
  };

  const sendEditNoteAPICall = async (id) => {
    const UpdateNote = await axios.patch(
      "http://localhost:5000/updateNote/:id",
      {
        title: title,
        description: description,
      }
    );
  };

  // Function to delete a note

  const deleteNote = async (id) => {
    console.log(id);
    //Sending the API request to backend to delete the note
    const response = await axios.post(`http://localhost:5000/deleteNote/${id}`);

    // After deleting the note from db - get response of updated notes from db
    setNotes(response.data.notes);
  };

  return (
    <div className="App container">
      <>
        <Sidebar
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          AddNote={AddNote}
          edit={edit}
          EditNote={EditNote}
          EditNoteId={EditNoteId}
          sendEditNoteAPICall={sendEditNoteAPICall}
        />
      </>
      <div className="separation-bar"></div>
      <>
        <Notes notes={notes} deleteNote={deleteNote} EditNote={EditNote} />
      </>
    </div>
  );
}

export default App;
