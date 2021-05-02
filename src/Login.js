import React, {useState,useContext} from 'react';
import './Login.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import UserContext from './UserContext';
export default function Login(){
      const user=useContext(UserContext);
      let history=useHistory();

      const [email,setEmail]=useState('');
      const [password,setPassword]=useState('');
      const login=()=>{
        if(email == 'vishnudhaya4@gmail.com' && password =='12345'){
          user.setLogged(true);
          history.push('/Feed');
        }
        else{
          alert('Invalid Data');
        }
      //const data = { "email": email,"password": password};

      //const res=axios.post('https://reqres.in/api/login',data)
          //  .then(async function(res) {
          //  if(res.status=='200'){
            //    alert("success")
            //}
            //else{
              //    alert("failed")
           // }
        // })
        //.catch(function (error) {
          //  console.log(error);
       // });
    //}
      }
    return(
        
      <div className="log-form d1">
       &nbsp;&nbsp;<h3>LOGIN</h3>
  <form>
    <input type="email" title="email" name="email"  placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
    <input type="password" title="password" name="password"  placeholder="password" onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
   <button type="button" className="btn btn-primary" onClick={ () => login() }>Login</button>&nbsp;&nbsp;&nbsp;
    <a class="forgot" href="#">Forgot Password?</a>
  </form>
  </div>
   
    );
}