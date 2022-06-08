import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Main from "./components/MainPage/Main";
import useAuth from "./hooks/index";
import Routes from "./routes/Routes/index";
import Footer from "./components/Footer/Footer";
import SeatPicker from "./SeatPicker";

function App() {
  return (
    // <SeatPicker></SeatPicker>
    <Router>
      <Navbar />
      <Routes>
        <Main></Main>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
