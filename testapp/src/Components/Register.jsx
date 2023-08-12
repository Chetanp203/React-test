import React, { useEffect, useState } from 'react'
import "./../Components/Register.css"
import { useNavigate } from 'react-router-dom';


const Register = () => {
  
    const [userData, setUserData] = useState({name:"", email:"",password:"",ownTodo:[]});
    const router = useNavigate();  
    // const [user, setUser] = useState();
  
    const handleChange= (event) => {
       setUserData({...userData, [event.target.name] : event.target.value})
    }
  
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if(userData.name && userData.email && userData.password ){
            const array = JSON.parse(localStorage.getItem("Users")) || [];
  
            const userDataObj = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                ownTodo:[],
            };
            array.push(userDataObj);
            localStorage.setItem("Users", JSON.stringify(array));
            alert("Registration Successfull!!!")
            setUserData({name:"", email:"",password:""})
           
        } else {
            alert("All fields mandatory")
        }
    }


  return (
    <div id='reg-container'>
        <form className='reg-form' onSubmit={handleSubmit} >
        <h1>Register</h1>
         <label >Name:</label><br />
         <input type="text" placeholder='Username' name='name' onChange={handleChange} /><br />
         <label >Email:</label><br />
         <input type="email" placeholder='Email Id' name='email' onChange={handleChange} /><br />
         <label >Password:</label><br />
         <input type="password" placeholder='Username' name='password' onChange={handleChange} />
         <input type="submit" className='btn' value="Register" />
        <span>Already have an account? <span onClick={()=>router("/login")}><b>Login here!!</b></span></span>
        </form>

    </div>
  )
}

export default Register