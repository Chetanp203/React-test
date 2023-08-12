import React, { useContext, useEffect, useState } from 'react'
import "./AllTodos.css"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Auth-Context';

const AllTodos = () => {
    const{state}=useContext(AuthContext);
    const [allTodo, setAllTodo] = useState();
    const [isTodoExist, setIsTodoExist] = useState(false);
    const router = useNavigate();

    useEffect(() => {
        const getTodos = JSON.parse(localStorage.getItem("Todos"));

        if (getTodos) {
            setIsTodoExist(true);
            setAllTodo(getTodos);
        } else {
            setIsTodoExist(false);
        }
    }, [])

    const addOwnTodo = (id) => {
        const regUser = JSON.parse(localStorage.getItem("Todos"));

        if (state?.user) {
            for (let i = 0; i < regUser.length; i++) {
                if (regUser[i].email === state.user.email) {
                    const duplicate = regUser[i].ownTodo.find((e) => e.id === id);

                    if (regUser[i].ownTodo.length && duplicate) {
                        alert("todo already added");
                        router("/own-todo")
                    } else {
                        regUser[i].ownTodo.push(allTodo);
                        localStorage.setItem("Todos", JSON.stringify(regUser));
                        alert("todo added");
                        router("/all-todos")
                    }
                }
            }
        }
    };


    return (
        <div id="todo-con">
            {isTodoExist ? (
                <div >
                    {allTodo.length ? (
                        allTodo.map((item) => (
                            <div key={item.id} className='todo-box' >
                                <button className='addtobag' onClick={addOwnTodo} >Add to OwnTodo</button>
                                <p>{item.todo}</p>
                            </div>
                        ))
                    ) : (
                        <div>
                            <h1>Loading...</h1>
                        </div>
                    )}
                </div>
            ) : (
                <div style={{ textAlign: "center" }}>
                    <h1>No Todos</h1>
                </div>
            )}




        </div>
    )
}

export default AllTodos