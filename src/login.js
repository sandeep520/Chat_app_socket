
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import './App.css';
import { useForm } from "react-hook-form";
// import { Socket } from "./image/socket.jpg";
import socketIo from 'socket.io-client';

import {
    useHistory
} from "react-router-dom";
import { passwordValidation, emailValidation } from "./utils";
import Home from "./home";
import { connectSocket, emitEvent } from "./Socket/socket";
import Signup from "./signup";



const ENDPOINT = "http://kube.artoon.in:32234/";


function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const history = useHistory();

    const onSubmit = (data) => {
        console.log(data);
        // alert("login is successfully")
        emitEvent("login", {
            "email": data.emailId,
            "password": data.password
        })

        if (localStorage.getItem('token')) {
            console.log('hello')
            history.push("/chat")
        }

    }

    console.log(errors)

    const [socketConnect, setSocketConnect] = useState(false);
    const [user, setUser] = useState(null);
    // const [disable, setDisable] = React.useState(false);



    useEffect(() => {
        connectSocket((val) => {
            console.log(val);
            setSocketConnect(val);
        })
    }, [])

    useEffect((data) => {
        if (socketConnect) {
            emitEvent("test", {})
            // emitEvent("login", {
            //     "email": data.emailId,
            //     "password": data.password
            // })
        }
    }, [socketConnect])


    return (
        <>
            <div className="main" style={{}}>
                <div className="picture">
                    <img style={{ 'width': '500px', 'height': '150px', 'margin-top': '15px', marginLeft: '39%', 'border-radius': '50%' }} src="https://alter.com/images/logos/U29ja2V0KiNmMDYwMjAqTWVyaWVuZGEgQm9sZA/socket-logo-lg.png" alt="Workflow" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 style={{ 'font-weight': 'bold', 'font-family': 'Times New Roman , Times, serif' }}>Login page</h1>

                    <h2 style={{ 'font-family': 'Times New Roman , Times, serif' }}>Email Id*</h2>
                    <input style={{ 'width': '500px', 'height': '50px' }}
                        {...register("emailId", emailValidation("Email id"))} placeholder="Enter email id" />
                    {errors.emailId && <h3 style={{ color: 'red' }}>{errors.emailId.message}</h3>}

                    <h2 style={{ 'font-family': 'Times New Roman , Times, serif' }}>Password*</h2>
                    <input style={{ 'width': '500px', 'height': '50px' }} type="password"
                        {...register("password", passwordValidation("password"))} placeholder="Enter Password" />
                    {errors.password && <h3 style={{ color: 'red' }}>{errors.password.message}</h3>}


                    <input type="submit" />
                    {/* <input type="submit" value="Registration" onClick={Signup}/> */}

                    <input type="submit" value="signup" onClick={() => history.push("/signup")} />

                </form>
            </div>

        </>
    );
}

export default Login;


