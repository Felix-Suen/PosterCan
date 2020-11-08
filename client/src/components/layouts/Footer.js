import React from 'react';
import './layouts.css';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <div className="footer">
        <Container fluid="true">
            <Row>
                <Col style={{ textAlign: 'center' }}>
                    <button
                        type="button"
                        className="btn btn-light"
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                        onClick={() =>
                            window.open(
                                'https://www.instagram.com/postercan/',
                                '_blank'
                            )
                        }
                    >
                        <FontAwesomeIcon icon={faInstagram} />{' '}
                        instagram.com/postercan/
                    </button>
                </Col>
                <Col  style={{ textAlign: 'center' }}>
                    <button
                        type="button"
                        className="btn btn-light"
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                        onClick={() =>
                            window.open(
                                'https://github.com/Felix-Suen',
                                '_blank'
                            )
                        }
                    >
                        <FontAwesomeIcon icon={faGithub} />{' '}
                        github.com/Felix-Suen
                    </button>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Footer;
