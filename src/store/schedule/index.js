import { createSlice } from '@reduxjs/toolkit';

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState: {
        currentSchedule: '',
        mySchedules: [], // Complete schedules, not just ID. List of ID is in state.auth.user.schedules
        filteredSchedules: [],
        title: '',
        start: null,
        end: null,
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
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setStart: (state, action) => {
            state.start = action.payload;
        },
        setEnd: (state, action) => {
            state.end = action.payload;
        },
        toggleCurrentSchedule: (state) => {
            state.currentSchedule.status = !state.currentSchedule.status;
        },
        resetLogoutSchedule: (state) => {
            state = {
                currentSchedule: '',
                mySchedules: [], // Complete schedules, not just ID. List of ID is in state.auth.user.schedules
                filteredSchedules: [],
                title: '',
                start: null,
                end: null,
            };
        },
    },
});

export const { setCurrentSchedule, setSchedules, appendSchedule, concatSchedules, setFilteredSchedules, setTitle, setStart, setEnd, toggleCurrentSchedule, resetLogoutSchedule } = scheduleSlice.actions;
export const scheduleReducer = scheduleSlice.reducer;
