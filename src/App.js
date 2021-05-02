import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React,{useState} from 'react';
import './App.css';
import Login from './Login';
import About from './About';
import Feed from './Feed';
import Home from './Home';
import Contact from './Contact';
import {UserProvider} from './UserContext';
import {FeedProvider} from './FeedContext';
function App() {
  //const [fname,setName] = useState("vishnu"); test
  //user
  const [fname,setName] = useState("Dhaya");
  const [isLogged,setLogged] = useState(false);
  const user = {fname,setName,isLogged,setLogged};
  //feed
  const [feedList,setFeedList]=useState([{id:1,msg:"Hi Prasanna Good Morning",user:'Prasanna',image:'https://picsum.photos/200'},
  {id:2,msg:"Hi Natraj Good morning",user:'Natraj',image:'https://picsum.photos/200'}]);
  const feed={feedList,setFeedList};

  return (
    <Router>
      <UserProvider value={user}>
      <FeedProvider value={feed}>
    <Home />
    <Switch>
        <Route path="/login" exact >
            <Login />
        </Route>
        <Route path="/home" exact >
             <Home />
        </Route>
        <Route path="/About">
              <About />
        </Route>
        <Route path="/Contact">
              <Contact />
        </Route>
        <Route path="/Feed">
              <Feed />
        </Route>
      </Switch>
      </FeedProvider>
    </UserProvider>
    </Router>
  );
}

export default App;
