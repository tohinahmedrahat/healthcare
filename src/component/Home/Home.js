
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import img from "../../img/banner.jpg";
import img1 from "../../img/wecare.jpg";
import img2 from "../../img/Health.jpg";
import img3 from "../../img/bestsolitioun.jpg";
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
          <div className="baner_img">
            <img src={img} />
            <h1>we care about your health</h1>
          </div>
          <div className="home">
          <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>We do care your health</Card.Title>
              <Card.Text>
              Health problems, even minor ones, can interfere with or even overshadow other aspects of your life. Even relatively minor health issues such as aches, pains, lethargy, and indigestion take a toll on your happiness and stress levels. One way to improve your ability to cope with stress and feel better.
              </Card.Text>
              <Link to="/service"><Button variant="primary">Go To Service</Button></Link>
            </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>How to stay healthy for life</Card.Title>
              <Card.Text>
              A healthy lifestyle can help you thrive throughout your life. Making healthy choices isn't always easy, however. It can be hard to find the time and energy to exercise regularly or prepare healthy meals. However, your efforts will pay off in many ways, and for the rest of your life.
              </Card.Text>
              <Link to="/service"><Button variant="primary">Go To Service</Button></Link>
            </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{ width: '11rem' }} src={img3} />
            <Card.Body>
              <Card.Title>Providing the best health solution</Card.Title>
              <Card.Text>
              Much of the information about a patient required for clinicians to make meaningful treatment plans exist outside of current medical systems - the integration of health and social services is essential to better understand people with complex needs and .
              </Card.Text>
              <Link to="/service"><Button variant="primary">Go To Service</Button></Link>
            </Card.Body>
          </Card>
          </div>
           
        </div>
        </div>
    );
};

export default Home;<h1>we do care your health</h1>