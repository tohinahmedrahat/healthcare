import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth/UseAuth';

const Header = () => {
    const {singOut,user} = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
                
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <h5>{user.email}</h5>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            
            <Navbar bg="primary" collapseOnSelect expand="lg" variant="dark">
            <Container>
            <Navbar.Toggle className="ms-auto" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="ms-auto">
                <Link to="/">
                    <Button className="me-2" variant="light">Home</Button>
                </Link>
                <Link to="/service">
                    <Button variant="light">service</Button>
                </Link>
                <Link to="/register">
                    <Button variant="light" className="ms-2">register</Button>
                </Link>
                {
                    user.email?<Button onClick={singOut} variant="light" className="ms-2">SingOut</Button>:<Link to="/login">
                    <Button variant="light" className="ms-2">Login</Button>
                </Link>
                
                
                }
            
             </Nav>

            </Navbar.Collapse>
            </Container>
        </Navbar>
            
        </div>
    );
};

export default Header;