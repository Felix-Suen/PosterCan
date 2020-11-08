import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import '../layouts/layouts.css';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComments } from '@fortawesome/free-solid-svg-icons';

const Posters = ({ poster: { posters, loading } }) => {
    return loading ? (
        <Spinner />
    ) : (
        <div className="posters">
            <div className="card-container">
                <Container>
                    <Row>
                        {posters &&
                            posters.map((poster) => (
                                <Col sm="4">
                                    <Card
                                        key={poster.id}
                                        style={{ marginBottom: '30px' }}
                                    >
                                        <Link to={`/poster/${poster._id}`}><Card.Img
                                            variant="top"
                                            src={poster.images[0]}
                                        /></Link>

                                        <Card.Body>
                                            <Card.Title>
                                                {poster.title}
                                            </Card.Title>
                                            <Card.Text>
                                                <button
                                                    type="button"
                                                    class="btn btn-light"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faHeart}
                                                    />
                                                    <span>
                                                        <span>{poster.likes.length > 0 && (<span>{' '}
                                                        {poster.likes.length}</span>)}</span>{' '}
                                                    </span>
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-light"
                                                >
                                                    <Link to={`/poster/${poster._id}`}>
                                                        <FontAwesomeIcon
                                                            icon={faComments}
                                                        />
                                                        <span>
                                                            {poster.comments.length > 0 && (<span>{' '}
                                                            {poster.comments.length}</span>)}
                                                        </span>
                                                    </Link>
                                                </button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

Posters.propTypes = {
    poster: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    poster: state.poster,
});

export default connect(mapStateToProps)(Posters);
