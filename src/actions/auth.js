import axios from "axios";
import api_key from "api_key.js"

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
const API_KEY = api_key;


export const signupWithEmailAndPassword = (details, callback) => {
    return async(dispatch) => {
        try{
            const response = await axios.post(`${BASE_URL}signUp${API_KEY}`,{
                email: details.email,
                password: details.password,
                returnSecureToken : true
                });

                dispatch({
                    type: 'SIGNUP',
                    payload : response.data
                });
                localStorage.setItem("token", response.data.idToken)
                return callback(response.data);

            }
            catch(error){
                console.log(error.response);
                return callback({
                    error : true,
                    response : error.response
                })
        
            }
    }
}

export const loginWithEmailAndPassword = (details, callback) => {
    return async(dispatch) => {
        try{
            const response = await axios.post(`${BASE_URL}signInWithPassword${API_KEY}`,{
                email: details.email,
                password: details.password,
                returnSecureToken : true
                });

                dispatch({
                    type: 'LOGIN',
                    payload : response.data
                });
                localStorage.setItem("token", response.data.idToken);
                return callback(response.data);

            }
            catch(error){
                console.log(error.response);
                return callback({
                    error : true,
                    response : error.response
                })
        
            }
    }
}


export const checkIsLoggedIn = (callback) =>{
    return async(dispatch) => {
        try{
            let token = localStorage.getItem("token")
            if(!token){
                return;
            }
            const response = await axios.post(`${BASE_URL}lookup${API_KEY}`,{
                idToken : token
                });

                dispatch({
                    type: 'LOGIN',
                    payload : {
                        idToken : token,
                        localId: response.data.users[0].localId,
                        ...response.data
                    }
                });
                return callback(response.data);

            }
            catch(error){
                console.log(error.response);
                return callback({
                    error : true,
                    response : error.response
                })
        
            }
    }
}


export const logout = () => {
    return dispatch => {
        localStorage.removeItem("token")
        dispatch({
            type : 'LOGOUT'
        })
    }
}
