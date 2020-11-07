import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../img/PosterCanPlain.svg';
import './layouts.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navibar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <Nav style={{ fontSize: '18px' }}>
            <Nav.Link onClick={logout}>Log out</Nav.Link>
        </Nav>
    );

    const guestLinks = (
        <Nav style={{ fontSize: '18px' }}>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Sign up</Nav.Link>
        </Nav>
    );

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand
                    href="/"
                    style={{ fontSize: '20px', margin: 0, padding: 0 }}
                >
                    <img
                        alt=""
                        src={logo}
                        width="80"
                        height="80"
                        className="d-inline-block"
                    />{' '}
                    PosterCan
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    {!loading && (
                        <Fragment>
                            {isAuthenticated ? authLinks : guestLinks}
                        </Fragment>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

Navibar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navibar);
