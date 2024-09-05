import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./Components/Welcome";
import ProjectsPage from './Components/ProjectsPage';
import FauvoritesPage from './Components/FavoritesPage';
import AcademicsPage from './Components/AcademicsPage';
import AboutSection from './Components/AboutSection';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/fauvorites" element={<FauvoritesPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
