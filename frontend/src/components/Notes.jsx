import React from "react";
import "./Notes.css";
import {
  PencilIcon,
  TrashIcon,

  // PlusIcon,
} from "@heroicons/react/24/outline";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
const Notes = (props) => {
  function getCurrentDateTime() {
    var currentDate = new Date();

    // Get day, month, year
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // January is 0
    var year = currentDate.getFullYear();

    // Get hours and minutes
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    // Add leading zero if minutes is less than 10
    minutes = (minutes < 10 ? "0" : "") + minutes;

    // Add leading zero if hours is less than 10
    hours = (hours < 10 ? "0" : "") + hours;

    // Format date as dd-mm-yyyy : HH:MM
    var formattedDateTime =
      day + "-" + month + "-" + year + " | " + hours + ":" + minutes;

    return formattedDateTime;
  }

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
          {/* <p className="note__description"> {note.description} </p> */}
          <p>{getCurrentDateTime()}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
