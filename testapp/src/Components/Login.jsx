import React, { useEffect, useState } from 'react'
import "./../Components/Register.css"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Auth-Context';
import { useContext } from 'react';

const Login = () => {
  const {state, login} = useContext(AuthContext);
  console.log(state,"-state")
  const [userData, setUserData] = useState({name:"", email:"",password:""});
  const router = useNavigate();
  console.log(userData,"-userdata");
  const [user, setUser] = useState();

  useEffect(()=> {
     if(state?.user){
      setUser(state?.user)
     }else{
      setUser({});
     }
  },[state])

  const handleChange= (event) => {
     setUserData({...userData, [event.target.name] : event.target.value})
  }

  const handleloginSubmit = (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
        const users = JSON.parse(localStorage.getItem("Users"));
        console.log(users,"-users")
        var flag = false;
        for (var i = 0; i < users.length; i++) {
            if (users[i].email == userData.email && users[i].password == userData.password) {
                flag = true;
                login(users[i]);

                alert("Login successfull.");
                setUserData({ email: "", password: "" })
                router('/');
                break;
            }
        }

        if (flag == false) {
            return alert("Please check credentails.")
        }

    } else {
        alert("All fields are mandatory")
    }
}


  return (
    <div id='reg-container'>
        <form className='reg-form' onSubmit={handleloginSubmit}>
        <h1>Login</h1>
        <label >Email ID:</label>
         <input type="email" placeholder='Email Id' name='email'  onChange={handleChange}/><br />
         <label >Password:</label><br />
         <input type="password" placeholder='Username' name='password' onChange={handleChange} />
         <input type="submit" className='btn' value="Login" />
         <span>Don't have an account? <span onClick={()=>router("/register")}><b>Register here!!</b></span></span>
        </form>

    </div>
  )
}

export default Login