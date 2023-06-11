import axios from "axios";
import { server } from "../store";

export const createCourse = (formData) => async (dispatch) => {
    try {
        dispatch({ type: "createCourseRequest" });
        const { data } = await axios.post(`${server}/createcourse`, formData,  { 
            headers: {
                "content-type": "application/json"
            },
             withCredentials: true });
        // console.log(data);
        console.log(data);
        dispatch({ type: 'createCourseSuccess', payload: data.message })
    }
    catch (error) {
        dispatch({ type: 'createCourseFail', payload: error.response.data.message })
    }

}