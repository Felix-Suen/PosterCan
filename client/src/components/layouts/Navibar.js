import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../img/PosterCanPlain.svg';
import './layouts.css'

const Navibar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home" style={{fontSize: '20px', margin: 0, padding: 0}}>
                <img
                    alt=""
                    src={logo}
                    width="80"
                    height="80"
                    className="d-inline-block"
                />{' '}PosterCan
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav style={{fontSize: '18px'}}>
                    <Nav.Link href="#deets">Login</Nav.Link>
                    <Nav.Link href="#deets">Sign up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navibar;
