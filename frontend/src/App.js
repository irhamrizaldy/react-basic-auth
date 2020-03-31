import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { About } from './components/About';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">ReactJS</h3>
        <h5 className="m-3 d-flex justify-content-center">Irham Rizaldy</h5>
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} exact />
          <Route path='/dashboard' component={Dashboard} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
