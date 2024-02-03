import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./pages/Profile";
import Preview from "./pages/Preview";
import Links from './pages/Links';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/link" element={<Links />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </Router>

  );
}

export default App;
