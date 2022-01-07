import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { scheduleReducer } from "./schedule";

export default configureStore({
    reducer: {
        auth: authReducer,
        schedule: scheduleReducer,
    },
});