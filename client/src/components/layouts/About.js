import React from 'react';
import './layouts.css';
import Room from '../../img/room.png';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faIdCard,
    faEnvelope,
    faLaptopCode,
    faNetworkWired,
    faBook,
    faBicycle,
} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';

const About = () => {
    var link = (
        <a target="_blank" href="mailto: fwhsuen@uwaterloo.ca" style={{ color: '#504b46',  }}>
            <u><FontAwesomeIcon icon={faEnvelope} /> fwhsuen@uwaterloo.ca</u>
        </a>
    );

    return (
        <div className="about">
            <Container fluid="md">
                <Row>
                    <Col md={6}>
                        <img src={Room} alt="room drawing" />
                    </Col>
                    <Col md={6}>
                        <div className="about-txt">
                            <h3>
                                <FontAwesomeIcon icon={faIdCard} /> About Me
                            </h3>
                            <br />
                            <p>
                                I'm Felix, currently a second year Computer
                                Engineering Student at the University of
                                Waterloo. This project combines my interests of
                                graphics design and full stack web development
                                together. The posters here are all made with
                                Inkscape, an open source vector graphics editor.
                                Feel Free to contact me at {link} as I am also
                                seeking for 2021 Summer Internship.
                            </p>
                            <div></div>
                            <p>
                                When I'm not near a computer, I'd like to bury
                                myself in books or take a scenic ride alone on
                                my bicycle.
                            </p>
                            <div style={{ textAlign: 'center' }}>
                                <FontAwesomeIcon icon={faLaptopCode} />{' '}
                                <FontAwesomeIcon icon={faNetworkWired} />{' '}
                                <FontAwesomeIcon icon={faBook} />{' '}
                                <FontAwesomeIcon icon={faBicycle} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
