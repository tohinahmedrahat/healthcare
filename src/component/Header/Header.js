import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth/UseAuth';

const Header = () => {
    const {singOut} = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            
            <Navbar bg="primary" collapseOnSelect expand="lg" variant="dark">
            <Container>
            <Navbar.Toggle className="ms-auto" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="ms-auto">
                <Link to="/service">
                    <Button variant="light">service</Button>
                </Link>
                <Link to="/service-detail">
                    <Button variant="light" className="ms-2">service details</Button>
                </Link>
                <Link to="/login">
                    <Button variant="light" className="ms-2">Login</Button>
                </Link>
                
                <Button onClick={singOut} variant="light" className="ms-2">SingOut</Button>
            
             </Nav>

            </Navbar.Collapse>
            </Container>
        </Navbar>
            
        </div>
    );
};

export default Header;