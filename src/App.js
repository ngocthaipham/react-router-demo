import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <AboutMe />
            </Route>
            <Route exact path='/projects'>
              <Projects />
            </Route>
            <Route path='/projects/:id'>
              <ProjectDetail />
            </Route>
        </Switch>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
