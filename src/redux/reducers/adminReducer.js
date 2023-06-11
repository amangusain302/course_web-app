import { createReducer } from "@reduxjs/toolkit"

export const adminReducer = createReducer({},{
    createCourseRequest : (state) => {
        state.loading = true;
    },
    createCourseSuccess : (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    createCourseFail : (state, action) => {
        state.loading = true;
        state.error = action.payload;
    },
})