import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div id= "container-wrap">
        <Navbar />
        <div id="colorlib-main">
          <Home />
          <About />
          <Services />
          <Skills />
          <Education />
          <Experience />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
