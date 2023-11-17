import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducer";

const initialState = {
    message: ''
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        // actions
        reset: (state, action) => {
            state.message = "";
        }
    },

    // 1.... hardcoded name (Don't use this) - just for understanding what's going behind the screen
    // extraReducers: {
    //     "todo/add" : (state, action) => {
    //             console.log('todo/add in notificationReducer');
    //         state.message = "Todo is created";
    //     },
    //     "note/add" : (state, action) => {
    //             console.log('note/add in notificationReducer');
    //         state.message = "Note is created";
    //     }
    // }

    // 2.... updated prebuild extraReducer (use this)
    // extraReducers: (builder) => {
    //     builder.addCase(actions.add, (state, action) => {
    //         state.message = "Todo is created";
    //     })
    // }

    // 3...
    extraReducers: {
        // map objects: [key]: value
        [actions.add]: (state, action) => {
            state.message = "Todo is created";
        }
    }

});

export const notificationReducer = notificationSlice.reducer;
export const resetNotification = notificationSlice.actions.reset;
export const notificationSelector = (state) => state.notificationReducer.message;