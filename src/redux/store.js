// import * as redux from "redux";
// import { combineReducers } from "redux";

import { notificationReducer } from './reducers/notificationReducer';
import {todoReducer} from './reducers/todoReducer';
import { noteReducer } from "./reducers/noteReducer";
import { configureStore } from '@reduxjs/toolkit';
import { loggerMiddleware } from './middleware/loggerMiddleware';


export const store = configureStore({
    reducer: {
        todoReducer,
        noteReducer,
        notificationReducer
    },
    middleware: [loggerMiddleware]
})

// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })

// export const store = redux.createStore(result);
