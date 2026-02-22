import React from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import Portfolio from './sections/Portfolio';
import Skills from './sections/Skills';
import AboutContact from './sections/AboutContact';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference pointer-events-none">
        <h1
          onClick={() => scrollToSection('hero')}
          className="font-cinematic text-xl font-bold tracking-widest uppercase text-white pointer-events-auto cursor-none hover:text-accent transition-colors duration-300"
        >
          CSH<span className="text-accent">.</span>
        </h1>
        <div className="flex gap-6 font-sans text-sm tracking-widest uppercase text-white/70">
          <button onClick={() => scrollToSection('portfolio')} className="interactive pointer-events-auto cursor-none hover:text-white transition-colors duration-300">Work</button>
          <button onClick={() => scrollToSection('skills')} className="interactive pointer-events-auto cursor-none hover:text-white transition-colors duration-300">Skills</button>
          <button onClick={() => scrollToSection('about')} className="interactive pointer-events-auto cursor-none hover:text-white transition-colors duration-300">About</button>
        </div>
      </nav>

      <main className="flex flex-col relative w-full">
        <div id="hero">
          <Hero />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="about">
          <AboutContact />
        </div>
      </main>
    </div>
  );
}

export default App;
