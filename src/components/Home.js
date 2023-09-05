import { useContext, React } from "react";
import noteContext from "../context/notes/NoteContext";
import Notes from "./Notes";
import AddNote from './AddNote'

const Home = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;

  
  return (
    <div>
      <AddNote/>
      <Notes/>
    </div>
  );
};

export default Home;
