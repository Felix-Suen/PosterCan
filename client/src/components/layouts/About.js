import React from 'react';
import './layouts.css';
import Room from '../../img/room.png';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <div className="about">
            <Container fluid="md">
                <Row>
                    <Col md={6}>
                        <img
                            src={Room}
                            alt="room drawing"
                        />
                    </Col>
                    <Col md={6}>
                        <div className="about-txt">
                            <h3>About Me</h3>
                            <br />
                            <p>I like to capture the details in life</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
