import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Main from "./components/MainPage/Main";
import useAuth from "./hooks/index";
import Routes from "./routes/Routes/index";
// import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Main></Main>
      </Routes>
    </Router>
  );
}

export default App;
