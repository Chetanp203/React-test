import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Auth-Context';

const OwnTodos = () => {
    const {state}= useContext(AuthContext)
    const [ownTodo, setOwnTodo]= useState();
    const router = useNavigate();

    useEffect (()=>{
        const currentuser = JSON.parse(localStorage.getItem("Current-user"));
        if (!currentuser){
            alert("Login to view your Todos")
            router("/login")
        }
    },[])

    useEffect(() => {
        const currentuser = JSON.parse(localStorage.getItem("Current-user"));
        const regusers = JSON.parse(localStorage.getItem("Users"));
    
        if (state?.user) {
          for (let i = 0; i < regusers.length; i++) {
            if (regusers[i].email === currentuser.email) {
              setOwnTodo(regusers[i].ownTodo);
            }
          }
        }
      }, [state]);

    const removeTodo = (id)=>{
        const currentuser = JSON.parse(localStorage.getItem("Current-user"));
        const regusers = JSON.parse(localStorage.getItem("Users"));
        const filterItem = ownTodo.filter((item) => item.id != id);

        if(state?.user){
            for(let i=0; i< regusers.length; i++){
                if(regusers[i].email === currentuser.email){
                    regusers[i].ownTodo = filterItem;
                    localStorage.setItem("Users", JSON.stringify(regusers));
                    setOwnTodo(filterItem);
                    alert("Todo removed")
                }
            }
        }
    };

  return (
    <div></div>
  )
}

export default OwnTodos