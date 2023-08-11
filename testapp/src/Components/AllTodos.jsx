import React, { useEffect, useState } from 'react'
import "./AllTodos.css"

const AllTodos = () => {
    const[isTodo, setIsTodo]=useState();

    useEffect (()=>{
        if(isTodo)
    })
  return (
   <div id="todo-con">
     <div className='todos'>
     <h1>Todo List</h1>
     <ul>
        <li></li>
     </ul>
    </div>
   </div>
  )
}

export default AllTodos