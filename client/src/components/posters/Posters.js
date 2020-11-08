import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import '../layouts/layouts.css';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import Footer from '../layouts/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faDownload } from '@fortawesome/free-solid-svg-icons';
import { addLike } from '../../actions/poster';

const Posters = ({ poster: { posters, loading }, addLike, isAuthenticated }) => {
    return loading ? (
        <Spinner />
    ) : (
        <div className="posters">
            <div className="card-container">
                <div className="cards">
                    <Container fluid="md">
                        <Row>
                            {posters &&
                                posters.map((poster) => (
                                    <Col sm="4">
                                        <Card
                                            key={poster.id}
                                            style={{ marginBottom: '30px' }}
                                        >
                                            <Link to={`/posters/${poster._id}`}>
                                                <Card.Img
                                                    variant="top"
                                                    src={poster.images[0]}
                                                    className="cardImg"
                                                />
                                            </Link>

                                            <Card.Body>
                                                <Card.Title>
                                                    {poster.title}
                                                </Card.Title>
                                                <Card.Text>
                                                    <Card.Text>
                                                        <button
                                                            type="button"
                                                            className="btn btn-light"
                                                            onClick={() => !isAuthenticated ? (window.location.href='/login') : addLike(poster._id)
                                                            }
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faHeart}
                                                            />
                                                            <span>
                                                                <span>
                                                                    {poster
                                                                        .likes
                                                                        .length >
                                                                        0 && (
                                                                        <span>
                                                                            {' '}
                                                                            {
                                                                                poster
                                                                                    .likes
                                                                                    .length
                                                                            }
                                                                        </span>
                                                                    )}
                                                                </span>{' '}
                                                            </span>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-light"
                                                            onClick={() =>
                                                                window.open(
                                                                    poster
                                                                        .images[0],
                                                                    '_blank'
                                                                )
                                                            }
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faDownload
                                                                }
                                                            />{' '}
                                                            Download
                                                        </button>
                                                    </Card.Text>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        </div>
    );
};

Posters.propTypes = {
    poster: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    poster: state.poster,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addLike })(Posters);
