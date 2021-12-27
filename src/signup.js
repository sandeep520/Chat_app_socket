
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './App.css';
import { useForm } from "react-hook-form";
import { connectSocket, emitEvent } from "./Socket/socket";



import {
    useHistory
} from "react-router-dom";
import { passwordValidation, emailValidation, nameValidation, mobileValidation } from "./utils";

const ENDPOINT = "http://kube.artoon.in:32234/";

function Signup() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();


    const history = useHistory();

    const onSubmit = (data) => {
        console.log(data);
        alert("Registartion is successfully")
        history.push("/login")

        emitEvent("signup", {
            "name": data.name,
            "email": data.emailId,
            "password": data.password,
            "phone": data.number
        })
    }


    console.log(errors);


    const [socketConnect, setSocketConnect] = useState(false);
    const [user, setUser] = useState(null);



    useEffect(() => {
        connectSocket((val) => {
            console.log(val);
            setSocketConnect(val);
        })
    }, [])

    useEffect(() => {
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
            <div className="picture">
                <img style={{ 'width': '500px', 'height': '130px', 'margin-top': '15px', marginLeft: '40%', 'border-radius': '50%' }} src="https://alter.com/images/logos/U29ja2V0KiNmMDYwMjAqTWVyaWVuZGEgQm9sZA/socket-logo-lg.png" alt="Workflow" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 style={{ 'font-weight': 'bold', 'font-family': 'Times New Roman , Times, serif' }}>Registartion page</h1>

                <h2 style={{ 'font-family': 'Times New Roman , Times, serif' }}>Name*</h2>
                <input style={{ 'width': '500px', 'height': '50px' }}
                    {...register("name", nameValidation("Name"))} placeholder="Enter Name" />
                {errors.name && <h3 style={{ color: 'red' }}>{errors.name.message}</h3>}


                <h2 style={{ 'font-family': 'Times New Roman , Times, serif' }}>Email Id*</h2>
                <input style={{ 'width': '500px', 'height': '50px' }}
                    {...register("emailId", emailValidation("Email id"))} placeholder="Enter email id" />
                {errors.emailId && <h3 style={{ color: 'red' }}>{errors.emailId.message}</h3>}

                <h2 style={{ 'font-family': 'Times New Roman , Times, serif' }}>Password*</h2>
                <input style={{ 'width': '500px', 'height': '50px' }} type="password"
                    {...register("password", passwordValidation("password"))} placeholder="Enter Password" />
                {errors.password && <h3 style={{ color: 'red' }}>{errors.password.message}</h3>}

                <h2 style={{ 'font-family': 'Times New Roman , Times, serif' }}>Mobile Number*</h2>
                <input style={{ 'width': '500px', 'height': '50px' }} name="telNo" type="tel"
                    {...register("number", mobileValidation("Mobile number"))} placeholder="Enter mobile number" />
                {errors.number && <h3 style={{ color: 'red' }}>{errors.number.message}</h3>}


                <input type="submit"  />
                {/* <input type="submit" value="signup" onClick={() => history.push("/signup")} /> */}


            </form>
        </>

    );
}
export default Signup;




// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import './App.css';
// import { useEffect } from 'react'
// import { useForm } from "react-hook-form";


// import {
//     useHistory, useRouteMatch
// } from "react-router-dom";
// import { mobileValidation, nameValidation, passwordValidation, emailValidation } from "./utils";

// function App() {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors }
//     } = useForm();


//     const [users, setUsers] = useState();
//     useEffect(() => {
//         setUsers(JSON.parse(localStorage.getItem('Users')))
//     }, []);

//     console.log(users)
//     const history = useHistory();


//     const onSubmit = (data) => {
//         console.log(data);
//         alert("Registartion is successfully")


//         let myObjs;
//         if (!users) {
//             myObjs = [];
//         } else {
//             myObjs = users;
//         }
//         let myObj = { firstName: data.firstname, lastName: data.lastName, emailId: data.emailId, password: data.password, number: data.number, id: Math.random() }
//         myObjs.push(myObj)
//         localStorage.setItem("Users", JSON.stringify(myObjs));
//         history.push("/signin")
//     }
//     console.log(errors)



//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <h1> Sing Up page</h1>
//             <label>First Name</label>
//             <input {...register("firstname", nameValidation("First Name"))} />
//             {errors.firstname && <p>{errors.firstname.message}</p>}

//             <label>Last Name</label>
//             <input {...register("lastName", nameValidation("Last Name"))} />
//             {errors.lastName && <p>{errors.lastName.message}</p>}


//             <label>Email Id</label>
//             <input {...register("emailId", emailValidation("Email id"))}/>
//             {errors.emailId && <p>{errors.emailId.message}</p>}


//             <label>Password</label>
//             <input type="password" {...register("password", passwordValidation("password"))} />
//             {errors.password && <p>{errors.password.message}</p>}


//             <label>Mobile Number</label>
//             <input type="number"  {...register("number", mobileValidation("Mobile Number"))} />
//             {errors.number && <p>{errors.number.message}</p>}


//             <input type="submit" />
//             {/* <button onClick={() => history.push("/login")}>Switch to SignIn</button> */}
//         </form>
//     );
// }

// export default App;
