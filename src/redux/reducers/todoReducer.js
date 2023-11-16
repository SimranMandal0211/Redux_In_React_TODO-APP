// import { ADD_TODO, TOGGLE_TODO } from '../actions/todoActions';
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    todos: [
        {text: "Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
};

// Creating Reducer using Redux toolit
const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.todos.push({
                text: action.payload,
                completed: false
            })
        },
        toggle: (state, action) => {
            state.todos.map((todo, i) => {
                if(i === action.payload){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }
    }
});


// create reducer using react-redux 

// export function todoReducer(state=initialState, action){
//     switch(action.type){
//         case ADD_TODO :
//             return {
//                 ...state,
//                 todos: [
//                     ...state.todos,
//                     {
//                         text: action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             console.log(state.todos);
//             return {
//                 ...state,
//                 todos: state.todos.map((todo, i) => {
//                     if(i == action.index){
//                         todo.completed = !todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default :
//             return state;
//     }
// }