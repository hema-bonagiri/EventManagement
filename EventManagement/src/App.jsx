import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Event from './Components/Event/Event';
import Login from './Components/Login/Login';
import Signup from "./Components/Signup/Signup";
import CreateEvent from "./Components/CreateEvent/CreateEvent";
import Showevent from "./Components/Showevent/Showevent";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Event />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/createEvent" element={<CreateEvent />} />
        <Route path="/showevent" element={<Showevent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
