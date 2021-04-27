import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from 'react';
import back from './back.jpg';
//   import './Feed.css';
  //import axios from 'axios';
  import './Feed.css';
export default function Feed(){
  const alt=()=>{
    alert("Feed okkk");
  }
    return(
        <div className="container div_1">
        <div className="form-group div_2 text-center">
        <form>
        <label for="exampleFormControlTextarea1"><h2>Feed</h2></label>
        <textarea className="form-control rounded-0 t1" id="exampleFormControlTextarea1" rows="5"></textarea><br/>
        <button type="button" className="btn btn-danger" onClick={ () => alt() }>Add</button>
        </form>
        </div>


        <div className="card text-white bg-danger detail card_div">
          <div className="card-header"><h3>The student Profile</h3></div>
          <img className="m1" src={back} />
            <div className="card-body">
                      <p className="card-text">NAME:</p>
                      <p className="card-text">EMAIL-ID:</p>
                      <p className="card-text">QUALIFICATION:</p>
                      <p className="card-text">GENDER:</p>
                      <p className="card-text">DATE OF JOIN:</p>
              </div>
        </div>
      </div>
    );
}