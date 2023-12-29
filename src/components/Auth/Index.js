import { Fragment, useEffect, useState } from 'react';
import {NavLink, useLocation, useNavigate} from 'react-router-dom'
import Loader from '../UI/Loader';
import { loginWithEmailAndPassword, signupWithEmailAndPassword } from '../../actions/auth';
import {useDispatch} from 'react-redux';

const AuthIndex = () => {
    const [details, setDetails] = useState({
        email : "",
        password : ""
    });
    const location = useLocation();
    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInput = e =>{
        // console.log(e.target.name, e.target.value);
        setDetails({
            ...details,
            [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
        return () => {
            setLoader(false);
            setDetails({
                email : "",
                password : ""
            })
        }
    }, [])

    const handleSubmission = event => {
        event.preventDefault();
        // console.log(details);
        if(location.pathname == "/signup"){
            setLoader(true);
            dispatch(signupWithEmailAndPassword(details, data => {
                if(data.error){
                    console.log(data.error);
                    alert("Some Error occured");
                }else{
                    console.log("Successfully signed up");
                    navigate("/");
                }
                setLoader(false);

            }))
        }
        else if (location.pathname == "/login"){
            setLoader(true);
            dispatch(loginWithEmailAndPassword(details, data => {
                if(data.error){
                    console.log(data.error);
                    alert(data.response.data.error.message || "Some error occurred")
                    // alert("Some Error occuered");
                }else{
                    console.log("Successfully logged in")
                    navigate("/")
                }
            }))
        }


    }

    
    

    return (
        <Fragment>
        <div className="auth-container">

            <div className="auth-container--box">
                <div className="tab-selector">
                    <NavLink to={"/login"}><h3>Login</h3></NavLink>
                    <NavLink to={"/signup"}><h3>Sign Up</h3></NavLink>
                </div>

                <form autoComplete={"off"} onSubmit={handleSubmission}> 
                    <div className="input-wrap">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Enter Email" value={details.email} onChange={handleInput}/>
                    </div>

                    <div className="input-wrap">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter password" value={details.password} onChange={handleInput}/>
                    </div>

                    <div className="button-wrap">
                        <button className="login-btn">
                            {
                                (location.pathname == "/login") ? "Login" : "Sign Up"
                            }
                        </button>
                    </div>
                </form>

            </div>

        </div>
        { loader &&<Loader /> }
        </Fragment>
    )
}

export default AuthIndex;