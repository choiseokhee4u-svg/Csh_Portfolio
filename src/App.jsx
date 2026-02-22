import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Works from './pages/Works';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
