import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/header.js';
import Footer from './components/footer.js';
import Navbar from './components/navbar.js';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Home />
      <Contact />
      <Portfolio />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
