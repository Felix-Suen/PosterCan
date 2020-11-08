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
import { faHeart, faComments } from '@fortawesome/free-solid-svg-icons';
import { addLike, removeLike } from '../../actions/poster';

const Poster = ({ getPoster, poster: { poster, loading }, match }) => {
    useEffect(() => {
        getPoster(match.params.id);
    }, [getPoster]);

    return (
        <div className="snow">
            <div className="card-container">
                <Container>
                    {poster && (
                        <Col sm={4}>
                            <Card
                                key={poster.id}
                                style={{ marginBottom: '30px' }}
                            >
                                <Card.Img
                                    variant="top"
                                    src={poster.images[0]}
                                />

                                <Card.Body>
                                    <Card.Title>{poster.title}</Card.Title>
                                    <Card.Text>
                                        <button
                                            type="button"
                                            className="btn btn-light"
                                            onClick={(e) => addLike()}
                                        >
                                            <FontAwesomeIcon icon={faHeart} />
                                            <span>
                                                <span>
                                                    {poster.likes.length >
                                                        0 && (
                                                        <span>
                                                            {' '}
                                                            {poster.likes.length}
                                                        </span>
                                                    )}
                                                </span>{' '}
                                            </span>
                                        </button>
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
};

const mapStateToProps = (state) => ({
    poster: state.poster,
});

export default connect(mapStateToProps, { getPoster })(Poster);
