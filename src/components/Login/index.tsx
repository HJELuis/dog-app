
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Input } from "./styles";

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
            <Container>            
                <Form onSubmit={handleSubmit}>                          
                    <div>
                        <label htmlFor="username">User name </label><br />
                        <Input id="userName" type="text" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password </label><br />
                        <Input id="password" type="password" onChange={handleChange}/>
                    </div>  
                    <Button>Login</Button>
                </Form>
            </Container> 
        </Fragment>
    )
}

export default Login;