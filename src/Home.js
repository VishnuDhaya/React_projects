import {Link} from "react-router-dom";
import './Home.css';
import React,{useContext} from "react";
import Login from './Login';
import {useHistory} from 'react-router-dom';
import UserContext from './UserContext'; 

function Header(props){
  const user=useContext(UserContext);
  let history=useHistory();
    return(
      <div>
        <nav className="navbar navbar-dark indigo">
          
        <a className="navbar-brand" href="#">Intro by {user.fname}</a>
        {user.isLogged &&
        <form class="form-inline">
            <Link className="nav-link" to={"/"}><button className="btn btn-outline-white btn-sm" type="button">Home</button></Link>
            <Link className="nav-link" to={"/About"}><button className="btn btn-sm btn-outline-white" type="button">About</button></Link>
            <Link className="nav-link" to={"/Contact"}><button className="btn btn-sm btn-outline-white" type="button">Contact</button></Link>
            <Link className="nav-link" to={"/Feed"}><button className="btn btn-sm btn-outline-white" type="button">Feed</button></Link>
            <button className="btn btn-sm btn-outline-white" type="button" onClick={()=> {user.setLogged(false); history.push('/Login')} }>Logout</button>
          }
          {!user.islogged && <Link className="nav-link" to={"/Login"}><button className="btn btn-sm btn-outline-white" type="button">Login</button></Link>}
        </form>
        </nav>
        </div>
    );
}
export default Header;