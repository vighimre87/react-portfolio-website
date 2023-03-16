import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer/Footer';
// import Wrapper from './components/Wrapper/Wrapper';

function App() {

  const [currentpage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if(currentpage === "Home") {
      return <Home />;
    } else if (currentpage === "Projects") {
      return <Projects />;
    } else {
      return <Contact />;
    }
  }
  return (
    <div>
      <Header
      currentpage={currentpage}
      handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Footer/>
    </div>
  );
}

export default App;