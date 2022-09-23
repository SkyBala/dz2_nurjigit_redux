import React from "react";
import { useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import styled from "./Todolist.module.css"


const  Todolist = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const handleDelite = (id) => {
        dispatch({type : "DELETE_TODO", playload : id});
    }

    return(
        <>
            <ul>
                {todos.map((todo, i) => (
                        <li key={i} onClick={() => handleDelite(todo.id)}>

                            {todo.label}
                        </li>
                        ))}
            </ul>
        </>
    );
};
export default Todolist