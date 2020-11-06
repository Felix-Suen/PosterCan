import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import '../layouts/layouts.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Posters = ({
    poster: { posters, loading }
}) => {

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
                                        <Card.Img
                                            variant="top"
                                            src={poster.images[0]}
                                        />
                                        <Card.Body>
                                            <Card.Title>
                                                {poster.title}
                                            </Card.Title>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                {poster.date}
                                            </small>
                                        </Card.Footer>
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
