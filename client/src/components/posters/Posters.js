import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import '../layouts/layouts.css';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';

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
                                        <Link to={`/posters/${poster._id}`}>
                                            <Card.Img
                                                variant="top"
                                                src={poster.images[0]}
                                            />
                                        </Link>

                                        <Card.Body>
                                            <Card.Title>
                                                {poster.title}
                                            </Card.Title>
                                            <Card.Text>
                                                <Moment format="YYYY/MM/DD">
                                                    {poster.date}
                                                </Moment>
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
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    poster: state.poster,
});

export default connect(mapStateToProps)(Posters);
