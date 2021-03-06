import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/poster';
import { Form, Button } from 'react-bootstrap';

const CommentForm = ({ poster, addComment }) => {
    const [text, setText] = useState('');

    return (
        <div className="post-form">
            <Form
                className="form my-1"
                onSubmit={(e) => {
                    e.preventDefault();
                    addComment(poster._id, { text });
                    setText('');
                }}
                style={{ textAlign: 'right' }}
            >
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Leave a Comment"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button
                    type="submit"
                    variant="dark"
                    value="Submit"
                >Submit</Button>
            </Form>
        </div>
    );
};

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
