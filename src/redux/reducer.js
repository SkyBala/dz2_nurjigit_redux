const  initialState = {
    todos: [],
};

const  reducer = (state = initialState, action)=> {
    switch(action.type){
        case "ADD_TODO": {
            return{...state, todos: [...state.todos, action.payload] };
        }
        case  "DELETE_TODO":{
                return {...state, todos: state.todos.filter((todo) => todo.id !== action.playload),
                };
        }
        case "DELETE_ALL": {
            return {...state, todos:  state.todos.filter((todo) => todo.delete)}
        }
        default: return state;
     }
};

export default reducer;