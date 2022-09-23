import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {Box, Button, TextField} from "@mui/material";
import Todolist from "./todolist";

const Main = () => {
    const dispatch = useDispatch();
    const [todo,setTodo] = useState();
    const todos = useSelector((state) => state.todos )

    const  handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleClick = () => {
        dispatch({
            type:"ADD_TODO",
            payload : {label : todo , id: Math.ceil(Math.random() *500)},
        })
    }
    const deleteClick = () => {
        dispatch({
            type:"DELETE_ALL",

        })
    }
    return (
    <Box sx={{
        width:"100vw" ,
        height: "100vh",
        display:"flex" ,
        justifyContent:"center",
        alignItems: " center",
        flexDirection: "column",
    }}
    >
        <Box sx={{display: "flex",}}>
        <TextField onChange={handleChange}
                   placeholder="add todo"></TextField>
            <Button onClick={handleClick}
                    variant="contained">ADD TODO</Button>
            <Button onClick={deleteClick}
            variant={"contained"}> delete</Button>
       </Box>
        <Todolist/>
    </Box>
);
};


export  default Main