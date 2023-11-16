// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteAction";

const { createSlice } = require("@reduxjs/toolkit");

const initialState ={
    notes: [
        {text: 'Go to Gym at 6', createdOn: new Date()},
        {text: 'Study at 8', createdOn: new Date()},
    ]
};

// create reducer using react-toolkit
const noteSlice = createSlice({
    name: 'note',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.notes.push({
                text: action.payload,
                completed: false
            })
        },
        delete: (state, action) => {
            state.notes.splice(action.payload, 1);
        }
    }
});


// create reducer using react-redux

// export function noteReducer(state=initialState, action){
//     switch(action.type){
//         case ADD_NOTE: 
//             return {
//                 ...state,
//                 notes : [
//                     ...state.notes,
//                     {
//                         text: action.text,
//                         createdOn: new Date()
//                     }
//                 ]
//             }
//         case DELETE_NOTE: 
//         state.notes.splice(action.index, 1);
//         console.log(state.notes);
//             return {
//                 ...state,
//                 notes: [...state.notes]
//             }
//         default :
//             return state;
//     }
// }