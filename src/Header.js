import {Link} from "react-router-dom";
import './Header.css';
import React from "react";
function Header(){
    return(
        <div className="container text-center d1">
          <nav className="navbar n1">
  <form className="form-inline">
  <Link className="nav-link" to={"/Header"}><button className="btn btn-outline-success b1 bone" type="button">Home</button></Link>
    <Link className="nav-link" to={"/Feed"}><button className="btn btn-outline-success b1" type="button">Feed</button></Link>
    <Link className="nav-link" to={"/About"}><button className="btn btn-outline-success b1" type="button">About</button></Link>
    <Link className="nav-link" to={"/Contact"}><button className="btn btn-outline-success b1" type="button">Contact</button></Link>
    <Link className="nav-link" to={"/Login"}><button className="btn btn-outline-success b1" type="button">Sign-in</button></Link>
    <Link className="nav-link" to={"/Header"}><button className="btn btn-outline-success b1" type="button">Sign-out</button></Link>
  </form>
</nav>
</div>
    );
}
export default Header;