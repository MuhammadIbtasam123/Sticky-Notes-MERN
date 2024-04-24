import React from "react";
import "../App.css";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
const Sidebar = (props) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    AddNote,
    edit,
    setEdit,
    EditNoteId,
    sendEditNoteAPICall,
    toggle,
    setToggle,
  } = props;
  return (
    <div class="sidebar">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 class="sidebar-title">NoteKeeper</h2>
        {toggle && (
          <SunIcon
            onClick={() => {
              setToggle(!toggle);
            }}
            style={{
              height: "2rem",
            }}
          />
        )}
        {!toggle && (
          <MoonIcon
            onClick={() => {
              setToggle(!toggle);
            }}
            style={{
              height: "2rem",
            }}
          />
        )}
      </div>

      <label for="title" class="sidebar-label">
        Title
      </label>
      <input
        type="text"
        id="title"
        class="sidebar-input"
        placeholder="Enter titile"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label for="description" class="sidebar-label">
        Description
      </label>
      <textarea
        type="text"
        id="description"
        class="sidebar-input-description"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {edit && (
        <button
          onClick={() => {
            sendEditNoteAPICall(EditNoteId);
            setEdit(false);
          }}
          class="sidebar-button"
        >
          Edit note
        </button>
      )}
      {!edit && (
        <button onClick={AddNote} class="sidebar-button">
          {" "}
          Add note
        </button>
      )}
    </div>
  );
};

export default Sidebar;
