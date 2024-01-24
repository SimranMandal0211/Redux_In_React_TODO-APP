// import { ADD_TODO, TOGGLE_TODO } from '../actions/todoActions';
import axios from "axios";

const { createSlice, createAsyncThunk, thunkAPI } = require("@reduxjs/toolkit");


const initialState = {
    todos: [
        {text: "Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
};


export const getInitialStateAsyc = createAsyncThunk('todo/getInitialState', 
// async(_, thunkAPI) => {
//     try{
//         const res = await axios.get("http://localhost:4100/api/todos")
//         // dispatch(actions.setInitialState(res.data));  // react-redux - dispatch()
//         // for createAsyncThunk it has its own dispatch()
//         thunkAPI.dispatch(actions.setInitialState(res.data));

//     }catch(err){
//         console.log(err);
//     }
// },

// -------------------------------------------------
// OR another method of doing this using extraReducer
    () => {
        return axios.get('http://localhost:100/api/todos');
    }

);

export const addTodoAsync = createAsyncThunk("todo/addTodo", async(payload)=> {
    const response = await fetch("http://localhost:4100/api/todos", {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            text: payload,
            completed: false
        })
    });

    return response.json(); //returning a promise
})


// Creating Reducer using Redux toolit
const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        // bcoz we are using extraReducer for this now
        // setInitialState: (state, action) => {
        //     state.todos = [...action.payload];
        // },
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
    },

    extraReducers: (builder) => {
        builder.addCase(getInitialStateAsyc.fulfilled, (state, action) => {
            console.log('getInitialState is fulfiled');
            console.log(action.payload);
            state.todos = [...action.payload.data]
        })
        .addCase(addTodoAsync.fulfilled, (state, action) => {
            console.log(action.payload);
            state.todos.push(action.payload);
        })
    }
});

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;

// selector
export const todoSelector = (state) => state.todoReducer.todos;



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