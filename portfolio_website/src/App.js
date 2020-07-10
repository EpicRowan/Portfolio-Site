import React from 'react';
import './App.css';
import
  {
    BrowserRouter as Router,
      Route,
  } from "react-router-dom";
import FontAwesome from 'react-fontawesome'
import Navbar from './components/Navbar';
import Home from './contents/Home';
import Coding from './contents/Coding';
import AboutMe from './contents/AboutMe';
import Projects from './contents/Projects';
import Contact from './contents/Contact';

  function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/coding">
          <Coding />
        </Route>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
        )
  }

export default App;