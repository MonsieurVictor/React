import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';

import Nav from './common/Nav';

ReactDOM.render(
  <Router>
    <div>
      <Nav/>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    </div>
  </Router>,
  document.getElementById('root')
);
