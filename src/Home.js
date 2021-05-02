import {Link} from "react-router-dom";
import './Home.css';
import React,{useContext} from "react";
import Login from './Login';
import {useHistory} from 'react-router-dom';
import UserContext from './UserContext'; 
import logo from './images/logo.png';

function Header(props){
  const user=useContext(UserContext);
  let history=useHistory();
    return(
    
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    
  
        <img className="m1" src="https://image.shutterstock.com/image-illustration/lord-shiva-vector-260nw-1345243433.jpg" alt="logo"/>
    
      
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
      </div>
      <Link className="nav-link" to={"/Login"}><button className="btn btn-sm btn-outline-white" type="button">Login</button></Link>
        <button className="btn btn-sm btn-outline-white b2" type="button" onClick={()=> {user.setLogged(false); history.push('/Login')} }>Logout</button>
       
    </nav>



      /*</nav><div>
        <nav className="navbar navbar-dark indigo">
          
        <a className="navbar-brand" href="#">Intro by {user.fname}</a>
        {user.isLogged &&
        <form class="form-inline">
            
            
            
            
            
          }
          {!user.islogged && }
        </form>
        </nav>
        </div>*/
    );
}
export default Header;