import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import About from './About';
import Feed from './Feed';
import Header from './Header';
import Contact from './Contact';
function App() {
  //const [fname,setName] = useState("vishnu"); test

  return (
    <Router>
    <Header />
    <Switch>
      <Route path="/Feed">
        <Feed />
        </Route>
        <Route path="/About">
        <About />
        </Route>
        <Route path="/Login">
        <Login />
        </Route>
        <Route path="/Contact">
        <Contact />
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
