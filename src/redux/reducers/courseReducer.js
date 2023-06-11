import { createReducer } from "@reduxjs/toolkit";

export const courseReducer = createReducer({}, {
    allCourseRequest : (state) => {
        state.loading = true;
    },
    allCourseSuccess : (state, action) => {
        state.loading = false;
        state.courses = action.payload;
        state.message = action.payload.message;    
    },
    allCourseFail : (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    getCourseRequest : (state) => {
        state.loading = true;
    },
    getCourseSuccess : (state, action) => {
        state.loading = false;
        state.lectures = action.payload;
  
    },
    getCourseFail : (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    
    allToPlaylistRequest : (state) => {
        state.loading = true;
    },
    allToPlaylistSuccess : (state, action) => {
        state.loading = false;
        state.message = action.payload;    
    },
    allToPlaylistFail : (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    clearError:(state)=> {
        state.error = null
    },
    clearMessage:(state)=> {
        state.message = null
    },
})