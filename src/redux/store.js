import {configureStore} from "@reduxjs/toolkit"
import { profileReducer, subscriptionReducer, userReducer,  } from "./reducers/userReducer";
import { courseReducer } from "./reducers/courseReducer";
const store = configureStore({
    reducer:{
        user: userReducer,
        profile : profileReducer,
        courses : courseReducer,
        subscription : subscriptionReducer
    }
})

export default store;
// export const server = "https://course-web-backend.vercel.app/api/v1";
export const server = "http://localhost:4000/api/v1";