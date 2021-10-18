import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router';
import useAuth from '../../hooks/UseAuth/UseAuth';

const Login = () => {
    const {googleSingIn,user} = useAuth();
    
    return (
        <div>
            <Button className="mt-3" variant="dark" onClick={googleSingIn}>login with google</Button>
            <p>name:{user.name}</p>
            <p>name:{user.email}</p>
        </div>
    );
};

export default Login;