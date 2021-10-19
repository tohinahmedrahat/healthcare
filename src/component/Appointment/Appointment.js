import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Appointment = () => {
    return (
        <div>
            <h1>Fill The From</h1>
            <div>
            <Form className="w-75 m-auto">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>
                    Enter Your Name
                </Form.Label>
                <Form.Control type="Name" placeholder="write your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>write your problem</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
                <Link to="thankyou">
                <Button variant="primary" type="submit">
                   Submit
                </Button>
                </Link>
            </Form>
            </div>
        </div>
    );
};

export default Appointment;