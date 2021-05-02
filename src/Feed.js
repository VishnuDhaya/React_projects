//import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import React,{useState,useContext} from 'react';
import back from './back.jpg';
  //import axios from 'axios';
import './Feed.css';
import FeedContext from './FeedContext';
export default function Feed(){
const feed=useContext(FeedContext);
const [input,setInput]=useState('');
const arrDisplay=feed.feedList.map((feed)=> 
      <div className="card text-white bg-danger detail card_div">
        <div className="card-header"><h3>The student Profile</h3></div>
        <div className="card-body">
        <img className="card-image m1" src={feed.image} />
            <p className="card-text">id:  {feed.id}</p>
            <p className="card-text">User:  {feed.user}</p>
            <p className="card-text">Message:  {feed.msg}</p>
        </div>
        </div>);

function addFeed(){
    let arrInputItem ={
            id:3,
            msg:"Hi "+input+" Good Morning",
            user:input,
            image:'https://picsum.photos/200'
    };
    let arrPush=[...feed.feedList,arrInputItem];
    feed.setFeedList(arrPush);
    setInput('');
}
return(
        <div className="container div_1">
          <div className="form-group div_2 text-center">
            <form>
            <label for="exampleFormControlTextarea1"><h2>Feed</h2></label>
            <textarea className="form-control rounded-0 t1" id="exampleFormControlTextarea1" rows="1" onChange={(e)=>setInput(e.target.value)}></textarea><br/>
            <button type="button" className="btn btn-success" onClick={ () => addFeed() }>Add</button>
            </form>
          </div>
          <div>{arrDisplay}</div>
        </div>
    );
}