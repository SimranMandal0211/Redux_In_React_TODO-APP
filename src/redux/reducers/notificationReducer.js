import { createSlice } from "@reduxjs/toolkit";

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
    extraReducers: {
        "todo/add" : (state, action) => {
                console.log('todo/add in notificationReducer');
            state.message = "Todo is created";
        },
        "note/add" : (state, action) => {
                console.log('note/add in notificationReducer');
            state.message = "Note is created";
        }
    }
});

export const notificationReducer = notificationSlice.reducer;
export const resetNotification = notificationSlice.actions.reset;
export const notificationSelector = (state) => state.notificationReducer.message;