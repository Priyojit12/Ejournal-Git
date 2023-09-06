import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteStates";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SingUp from "./components/SingUp";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, errType) => {
    setAlert({
      message: message,
      errType: errType,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <BrowserRouter>
      <div className="app">
        <NoteState>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} />}
              />
              <Route
                exact
                path="/singup"
                element={<SingUp showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </NoteState>
      </div>
    </BrowserRouter>
  );
}

export default App;
