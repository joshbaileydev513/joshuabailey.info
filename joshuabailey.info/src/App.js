import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header.js';
import Footer from './components/footer.js';
import Navbar from './components/nav.js';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


function App () {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />

        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
