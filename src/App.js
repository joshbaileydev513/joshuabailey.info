import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header.js';
import Footer from './components/footer.js';
import NavComp from './components/nav.js';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const styles = {
  root: {
    minHeight: '100vh',
    position: 'relative'
  }
}

function App () {
  return (
    <Router>
      <div style= {styles.root}>
        <NavComp />
        <Header /> 
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
