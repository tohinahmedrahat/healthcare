import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth/UseAuth';
import "./Regester.css";

const Regester = () => {
    const {googleSingIn,user,inputEmail,inputPassword,singOut,createEmailAndPassword} = useAuth();
    return (
        <div>
            <h1>Please Register Your Account</h1>
            <div className="regester">
            <Form className="mt-5 w-75" onSubmit={createEmailAndPassword}>
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
                    Register
                </Button>
                }
            </Form>
            </div>
            <div className="register_btn">
            <Link to="/login">
                <Button className="mt-3 me-3" variant="primary">Already register</Button>
            </Link>
            <Button className="mt-3" variant="primary" onClick={googleSingIn}>Singin with google</Button>
            </div>
        </div>
    );
};

export default Regester;