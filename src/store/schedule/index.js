import { createSlice } from '@reduxjs/toolkit';

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState: {
        mySchedules: [],
        currentSchedule: null,
        allSchedules: [], // for admin
        filteredSchedules: [],
    },
    reducers: {
        getMySchedulesRequest: (state) => {},
        getMySchedulesSuccess: (state, action) => {},
        getMyScheduleFailure: (state, action) => {},
        getAllSchedulesRequest: (state) => {},
        getAllSchedulesSuccess: (state, action) => {},
        getAllSchedulesFailure: (state) => {},
    },
});

