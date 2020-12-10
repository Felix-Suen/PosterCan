import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import '../layouts/layouts.css';
import { Link } from 'react-router-dom';
import About from '../layouts/About';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Footer from '../layouts/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faDownload,
    faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { addLike, deletePoster } from '../../actions/poster';

const Posters = ({
    poster: { posters, loading },
    addLike,
    auth,
    deletePoster,
}) => {

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

                                            <Card.Body style={{ backgroundColor: "rgba(245, 245, 245, 0.4)" }}>
                                                <Card.Title>
                                                    {poster.title}
                                                </Card.Title>
                                                <Card.Text
                                                    style={{
                                                        textAlign: 'right',
                                                    }}
                                                >
                                                    <button
                                                        type="button"
                                                        className="btn btn-light"
                                                        onClick={() =>
                                                            !auth.isAuthenticated
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
                                                            icon={faDownload}
                                                        />{' '}
                                                        Download
                                                    </button>
                                                    {auth.isAuthenticated &&
                                                        auth.user.admin && (
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger"
                                                                onClick={() =>
                                                                    deletePoster(
                                                                        poster._id
                                                                    )
                                                                }
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faTrashAlt
                                                                    }
                                                                />
                                                            </button>
                                                        )}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                        </Row>
                    </Container>
                </div>
                <About />
                <Footer />
            </div>
        </div>
    );
};

Posters.propTypes = {
    poster: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    deletePoster: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    poster: state.poster,
    auth: state.auth,
});

export default connect(mapStateToProps, { addLike, deletePoster })(Posters);
