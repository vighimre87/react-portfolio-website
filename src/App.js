import React from 'react';
import './App.css';
import ContactLinks from './components/ContactLinks/ContactLinks';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Home />
      <Projects />
      <ContactLinks />
    </div>
  );
}

export default App;
