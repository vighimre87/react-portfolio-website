import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer/Footer';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <Router>
      <div>
      <Header />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Wrapper>
      <Footer />
    </div>
    </Router>
  );
}

export default App;