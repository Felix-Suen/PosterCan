import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/poster';
import '../layouts/layouts.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CommentItem = ({
    posterId,
    comment: { _id, text, name, avatar, user, date },
    auth,
    deleteComment,
}) => {
    return (
        <Card
            style={{
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none',
            }}
        >
            <Container>
                <Row>
                    <Col xs={3}>
                        <div style={{ textAlign: 'center' }}>
                            <img className="round-img" src={avatar} />
                        </div>
                    </Col>
                    <Col sm={7}>
                        <Card.Body>
                            <Card.Text>
                                <b style={{ fontSize: '20px' }}>{name}</b>
                                <br />
                                {text}
                                <br />
                                <br />
                                <div className="date">
                                    Posted on{' '}
                                    <Moment format="YYYY/MM/DD">{date}</Moment>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <div className="comment-delete">
                        {!auth.loading && auth.user && user === auth.user._id && (
                            <button
                                onClick={() => deleteComment(posterId, _id)}
                                type="button"
                                className="btn btn-danger"
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        )}
                    </div>
                </Row>
            </Container>
        </Card>
    );
};

CommentItem.propTypes = {
    posterId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
