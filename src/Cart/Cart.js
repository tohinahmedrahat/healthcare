import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Cart = ({service}) => {
    const {id,name,img,description} = service;
    return (
        <div>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" style={{ width: '20rem', height:"18rem" }} src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {description.slice(0,100)}
                    </Card.Text>
                    <Link to={`/service-detail/${id}`}>
                        <Button variant="dark">Click Here</Button>
                    </Link>
                </Card.Body>
                </Card>
            
        </div>
    );
};

export default Cart;