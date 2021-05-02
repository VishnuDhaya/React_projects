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
    
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    
  
        <img className="m1" src="https://image.shutterstock.com/image-illustration/lord-shiva-vector-260nw-1345243433.jpg" alt="logo"/>
    
    {user.isLogged &&
      <div className="container div_lord">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className="nav-link" to={"/"}><button className="btn btn-outline-white btn-sm b1" type="button">Home</button></Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to={"/About"}><button className="btn btn-sm btn-outline-white b1" type="button">About</button></Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to={"/Contact"}><button className="btn btn-sm btn-outline-white b1" type="button">Contact</button></Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to={"/Feed"}><button className="btn btn-sm btn-outline-white b1" type="button">Feed</button></Link>
        </li>
      </ul>
      
      <button className="btn btn-danger btn-sm btn-outline-white" type="button" onClick={()=> {user.setLogged(false); history.push('/Login')} }>Logout</button>
      </div>
    }
      <div className="div_footer">
      {!user.islogged && 
      <Link className="nav-link" to={"/Login"}><button className="btn btn-success btn-sm btn-outline-white b2" type="button">Login</button></Link>}
      </div>
       
    </nav>

    );
}
export default Header;