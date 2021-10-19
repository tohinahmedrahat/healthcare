import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation } from 'react-router';
import useAuth from '../../hooks/UseAuth/UseAuth';
import "./Login.css";

const Login = () => {
    const {user,inputEmail,inputPassword,singInWithEmailAndPassword,singOut} = useAuth();
    
    return (
        <div>
            <h1>Please Login Your Account</h1>
            <div className="from">
            <Form className="mt-5 w-75" onSubmit={singInWithEmailAndPassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={inputEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={inputPassword} type="password" placeholder="Password" />
                </Form.Group>
                
                {
                    user.email?<Button onClick={singOut}>sing out</Button>:<Button variant="primary" type="submit">
                    Login
                </Button>
                }
            </Form>
            </div>

            
            
        </div>
    );
};

export default Login;