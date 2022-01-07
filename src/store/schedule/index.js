import { createSlice } from '@reduxjs/toolkit';

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState: {
        currentSchedule: '',
    },
    reducers: {
        setCurrentSchedule: (state, action) => {
            state.currentSchedule = action.payload;
        },
    },
});

export const { setCurrentSchedule } = scheduleSlice.actions;
export const scheduleReducer = scheduleSlice.reducer;
