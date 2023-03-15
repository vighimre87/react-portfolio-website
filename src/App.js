import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
