import { server } from "../store";
import axios from 'axios';



export const login = (email, password, setCookie) =>
    async (dispatch) => {
        try {
            dispatch({ type: "loginRequest" });
            const { data } = await axios.post(`${server}/login`, { email, password }, {
                headers: {
                    "content-type": "application/json"
                },
            })
            setCookie('token', data.token);
            dispatch({ type: 'loginSuccess', payload: data })
            return data;
        }
        catch (error) {
            dispatch({ type: 'loginFail', payload: error.response.data.message })
        }
    }

export const getMyProfile = () => async (dispatch) => {
    try {
        dispatch({ type: "loadUserRequest" });
        const { data } = await axios.get(`${server}/me`, { withCredentials: true });
        // console.log(data);
        dispatch({ type: 'loadUserSuccess', payload: data.user })
    }
    catch (error) {
        dispatch({ type: 'loadUserFail', payload: error.response.data.message })
    }
}


export const logout = (removeCookie) => async (dispatch) => {
    try {
        dispatch({ type: "logoutRequest" });
        const { data } = await axios.get(`${server}/logout`, { withCredentials: true });
        console.log(data);
        removeCookie('token', null);
        dispatch({ type: 'logoutSuccess', payload: data.user })
    }
    catch (error) {
        dispatch({ type: 'logoutFail', payload: error.response.data.message })
    }
}

export const register = (formdata, setCookie) =>
    async (dispatch) => {
        try {
            dispatch({ type: "registerRequest" });
            const { data } = await axios.post(`${server}/register`, formdata, {
                headers: {
                    "content-type": "multipart/form-data"
                },
            })
            setCookie('token', data.token);
            dispatch({ type: 'registerSuccess', payload: data })
            return data;
        }
        catch (error) {
            dispatch({ type: 'registerFail', payload: error.response.data.message })
        }
    }


    
export const buySubscription = () =>
async (dispatch) => {
    try {
        dispatch({ type: "buySubscriptionRequest" });
        const { data } = await axios.get(`${server}/subscribe`, {
            withCredentials: true
        })
        dispatch({ type: 'buySubscriptionSuccess', payload: data.subscriptionId })
        return data;
    }
    catch (error) {
        dispatch({ type: 'buySubscriptionFail', payload: error.response.data.message })
    }
}

export const cancelSubscription = () =>
async (dispatch) => {
    try {
        dispatch({ type: "cancelSubscriptionRequest" });
        const { data } = await axios.delete(`${server}/subscribe/cancel`, {
            withCredentials: true
        })
        dispatch({ type: 'cancelSubscriptionSuccess', payload: data.message })
        return data;
    }
    catch (error) {
        dispatch({ type: 'cancelSubscriptionFail', payload: error.response.data.message })
    }
}

 