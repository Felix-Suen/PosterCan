import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getPoster } from '../../actions/poster';
import '../layouts/layouts.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faDownload } from '@fortawesome/free-solid-svg-icons';
import { addLike } from '../../actions/poster';

const Poster = ({ getPoster, poster: { poster, loading }, match, addLike }) => {
    useEffect(() => {
        getPoster(match.params.id);
    }, [getPoster]);

    return (
        <div className="snow">
            <div className="card-container">
                <Container fluid="md">
                    {poster && !loading && (
                        <Col md="auto">
                            <Card
                                key={poster.id}
                                style={{ marginBottom: '30px' }}
                            >
                                <Container>
                                    <Row>
                                        {poster.images.map((image) => (
                                            <Col style={{ padding: 3 }}>
                                                <Card.Img
                                                    variant="top"
                                                    src={image}
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                                </Container>

                                <Card.Body>
                                    <Card.Title>{poster.title}</Card.Title>
                                    <Card.Text>
                                        {poster.description}
                                        <div style={{ textAlign: 'right' }}>
                                            <button
                                                type="button"
                                                className="btn btn-light"
                                                onClick={() =>
                                                    addLike(poster._id)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faHeart}
                                                />
                                                <span>
                                                    <span>
                                                        {poster.likes.length >
                                                            0 && (
                                                            <span>
                                                                {' '}
                                                                {
                                                                    poster.likes
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
                                                        poster.images[0],
                                                        '_blank'
                                                    )
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faDownload}
                                                />{' '}
                                                Download
                                            </button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>

                                <Card.Footer>
                                    <Moment format="YYYY/MM/DD">
                                        {poster.date}
                                    </Moment>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )}
                </Container>
            </div>
        </div>
    );
};

Poster.propTypes = {
    getPoster: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    poster: state.poster,
});

export default connect(mapStateToProps, { getPoster, addLike })(Poster);
