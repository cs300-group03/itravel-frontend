import { createSlice } from '@reduxjs/toolkit';

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState: {
        currentSchedule: '',
        mySchedules: [], // Complete schedules, not just ID. List of ID is in state.auth.user.schedules
        filteredSchedules: [],
    },
    reducers: {
        setCurrentSchedule: (state, action) => {
            state.currentSchedule = action.payload;
        },
        setSchedules: (state, action) => {
            state.mySchedules = action.payload;
        },
        appendSchedule: (state, action) => {
            state.mySchedules.push(action.payload);
        },
        concatSchedules: (state, action) => {
            state.mySchedules = state.mySchedules.concat(action.payload);
        },
        setFilteredSchedules: (state, action) => {
            state.filteredSchedules = action.payload;
        }
    },
});

export const { setCurrentSchedule, setSchedules, appendSchedule, concatSchedules, setFilteredSchedules } = scheduleSlice.actions;
export const scheduleReducer = scheduleSlice.reducer;
