// src/App.tsx
import React from "react";
import MyMap from "./components/Map/Map";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlaceDetail from "./components/PlaceDetail/PlaceDetail";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyMap />} />
        <Route path="/details/:id" element={<PlaceDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
