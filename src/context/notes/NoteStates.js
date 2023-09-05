import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  const getAllNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkYjFjMzMxNjBkYjA2NTFkNGY4MTdhIn0sImlhdCI6MTY5MjA4MjgyNH0.DusHZpL_rcHQsv4vPdwjgOMjkmSieiRstGlsyyyMzmY",
      },
    });

    const json = await response.json();
    setNotes(json);
  };

  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/postallnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkYjFjMzMxNjBkYjA2NTFkNGY4MTdhIn0sImlhdCI6MTY5MjA4MjgyNH0.DusHZpL_rcHQsv4vPdwjgOMjkmSieiRstGlsyyyMzmY",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  const delNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkYjFjMzMxNjBkYjA2NTFkNGY4MTdhIn0sImlhdCI6MTY5MjA4MjgyNH0.DusHZpL_rcHQsv4vPdwjgOMjkmSieiRstGlsyyyMzmY",
      },
    });
    const json = response.json();
    console.log(json);

    console.log(id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkYjFjMzMxNjBkYjA2NTFkNGY4MTdhIn0sImlhdCI6MTY5MjA4MjgyNH0.DusHZpL_rcHQsv4vPdwjgOMjkmSieiRstGlsyyyMzmY",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = response.json();
    console.log(json);

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        notes[index].title = title;
        notes[index].description = description;
        notes[index].tag = tag;
      }
      break;
    }
    setNotes(notes);
  };

  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, delNote, editNote, getAllNotes }}
    > 
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
