import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, PlaceDetails } from "./pages";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<PlaceDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
