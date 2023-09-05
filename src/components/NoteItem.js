import { React, useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { delNote } = context;
  const { note,updateNote } = props;

  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-solid fa-trash mx-3"
              onClick={() => {
                delNote(note._id);
              }}
            ></i>
            <i
              className="fa-solid fa-pen-to-square"
              onClick={()=>{
                updateNote(note)
              }}
            ></i>
          </div>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {note.tag}{" "}
          </h6>
          <p className="card-text">{note.description} </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
