
import React, { useContext, useEffect, useState } from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/Auth-Context';

const Navbar = () => {
  const router = useNavigate();
  const { state, login ,logout} = useContext(AuthContext);
  console.log(state,"-state")
  const [userData, setUserData] = useState({name:"", email:"",password:""});
  const [user, setUser] = useState({});

  useEffect(()=> {
     if(state?.user?.email){
      setUser(state?.user)
     }else{
      setUser({});
     }
  },[state])

  return (
    <div id="nav">
      <div>
        <h1><em>Awdiz</em></h1>
      </div>
      <div className="comps">
        <ul>
          <li onClick={()=>router("/create-todo")}>CREATE TODO</li>
          <li onClick={()=>router("/all-todos")}>All TODOS</li>
          <li>OWN TODOS</li>
          {!state?.user &&<li onClick={()=>router("/login")}>Login</li>}
          {state?.user &&<li onClick={logout}>Logout</li>}
          
        </ul>
      </div>
        
    </div>
  )
}

export default Navbar