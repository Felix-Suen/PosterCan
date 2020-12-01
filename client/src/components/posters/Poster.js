import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPoster } from '../../actions/poster';
import '../layouts/layouts.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faDownload, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { addLike } from '../../actions/poster';
import Footer from '../layouts/Footer';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Poster = ({
    getPoster,
    poster: { poster, loading },
    match,
    addLike,
    auth,
    isAuthenticated,
}) => {
    useEffect(() => {
        getPoster(match.params.id);
    }, [getPoster, match.params.id]);

    const login = (
        <div>
            Please <Link to="/login">Login</Link> or{' '}
            <Link to="/register">Sign up</Link> to Comment on this Post!
        </div>
    );

    return (
        <div className="poster">
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
                                            <Col
                                                sm={true}
                                                style={{ padding: 3 }}
                                            >
                                                <Card.Img
                                                    variant="top"
                                                    src={image}
                                                    style={{ height: '100%' }}
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                                </Container>
                                <div className="comment">
                                    <Card.Body>
                                        <Card.Title>{poster.title}</Card.Title>
                                        <Card.Text>
                                            <div className="date">
                                                Posted on{' '}
                                                <Moment format="YYYY/MM/DD">
                                                    {poster.date}
                                                </Moment>
                                            </div>
                                            <br />
                                            {poster.description}

                                            {auth.isAuthenticated &&
                                                auth.user.admin && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        onClick={() =>
                                                            (window.location.href = `/edit/${match.params.id}`)
                                                        }
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faTrashAlt}
                                                        />
                                                    </button>
                                                )}

                                            <div className="poster-likes">
                                                <button
                                                    type="button"
                                                    className="btn btn-light"
                                                    onClick={() =>
                                                        !isAuthenticated
                                                            ? (window.location.href =
                                                                  '/login')
                                                            : addLike(
                                                                  poster._id
                                                              )
                                                    }
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faHeart}
                                                    />
                                                    <span>
                                                        <span>
                                                            {poster.likes
                                                                .length > 0 && (
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
                                    <div style={{ padding: '20px' }}>
                                        {isAuthenticated ? (
                                            <CommentForm poster={poster} />
                                        ) : (
                                            login
                                        )}
                                    </div>
                                    {poster.comments.map((comment) => (
                                        <CommentItem
                                            key={comment._id}
                                            comment={comment}
                                            posterId={poster._id}
                                        />
                                    ))}
                                </div>
                            </Card>
                        </Col>
                    )}
                </Container>
            </div>
            <Footer />
        </div>
    );
};

Poster.propTypes = {
    getPoster: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    poster: state.poster,
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getPoster, addLike })(Poster);
