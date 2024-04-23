import React from "react";
import "./Notes.css";
import {
  PencilIcon,
  TrashIcon,

  // PlusIcon,
} from "@heroicons/react/24/outline";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
const Notes = (props) => {
  const { notes, deleteNote, EditNote } = props;
  return (
    <div className="notes">
      {notes.map((note) => (
        <div key={note.id} className="notes-list">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div>{/* <FontAwesomeIcon icon=" fa thumb-stack" /> */}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <PencilIcon
                width={20}
                onClick={() => {
                  EditNote(note.id);
                }}
              />
              <TrashIcon
                width={20}
                onClick={() => {
                  deleteNote(note.id);
                }}
              />
            </div>
          </div>

          <h6 className="note__title">{note.title}</h6>
          <p className="note__description"> {note.description} </p>
          <p>{note.dateTime}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
