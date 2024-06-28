
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const[form, setForm] = useState({
        userName: "",
        password: "",
    })

    const USERNAME = "user";
    const PASSWORD = "password";

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({...prev, [event.target.id]:event.target.value}));
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(form.userName === USERNAME && form.password === PASSWORD){
            navigate("/dogs");
        } else {
            alert("Incorrect credentials");
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>                
                <div>
                    <label htmlFor="username">User name: </label>
                    <input id="userName" type="text" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input id="password" type="password" onChange={handleChange}/>
                </div>  
                <button>Enter</button>
            </form>
        </Fragment>
    )
}

export default Login;