import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteStates";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SingUp from "./components/SingUp";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NoteState>
          <Navbar />
          <Alert message={"this is alert"}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SingUp />} />
            </Routes>
          </div>
        </NoteState>
      </div>
    </BrowserRouter>
  );
}

export default App;