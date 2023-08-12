import React, { useContext, useState } from 'react'
import "./CreateTodo.css"
import { AuthContext } from '../Context/Auth-Context';
import { v4 as uuidv4 } from 'uuid';


const CreateTodo = () => {
    const [todoData,setTodoData]=useState({todo:""});
    const {state} = useContext(AuthContext);

    const handleChange= (event) => {
        setTodoData({...todoData, [event.target.name] : event.target.value})
     }

     const handletodoSubmit = (event) => {
        event.preventDefault();
        if(todoData.todo ){
            const todoArray = JSON.parse(localStorage.getItem("Todos")) || [];
  const randomId=uuidv4();
            const todoObj = {
                ...todoData,
                id:randomId
            };
            todoArray.push(todoObj);
            localStorage.setItem("Todos", JSON.stringify(todoArray));
            alert("Create todo Successfull!!!");
            setTodoData({todo:""})
           
        } else {
            alert("All fields mandatory");
            setTodoData({todo:""})
        }
    }

  return (
    <div>
        <form className='todo-form' onSubmit={handletodoSubmit}>
            <label>Task :</label><br />
            <input type="text" name="todo" onChange={handleChange} placeholder='Task to do' /><br />
            <input type="submit" value="Submit" className='btns'/>

        </form>
    </div>
  )
}

export default CreateTodo

