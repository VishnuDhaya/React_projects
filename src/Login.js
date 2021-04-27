import React, {useState} from 'react';
import './Login.css';
import axios from 'axios';
export default function Login(){
      const [email,setEmail]=useState('');
      const [password,setPassword]=useState('');
      const infro=()=>{
      const data = { "email": email,"password": password};
      const res=axios.post('https://reqres.in/api/login',data//{"email": "eve.holt@reqres.in","password": "cityslicka"}
      )
              .then(async function(res) {
            if(res.status=='200'){
                alert("success")
            }
            else{
                  alert("failed")
            }
         })
        .catch(function (error) {
            console.log(error);
        });
    }
    return(
        
      <div className="log-form d1">
       <h2>LOGIN</h2>
  <form>
    <input type="email" title="email" name="email"  placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
    <input type="password" title="password" name="password"  placeholder="password" onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
    <button type="button" className="btn btn-primary" onClick={ () => infro() }>Login</button>
    <a class="forgot" href="#">Forgot Username?</a>
  </form>
  </div>
   
    );
}