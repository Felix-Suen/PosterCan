import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPoster } from '../../actions/poster';
import { Form, Button } from 'react-bootstrap';

const PosterForm = props => {
    const [formData, setFormData] = useState({
        images: '',
        title: '',
        description: '',
    });

    const onChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    const {
        images,
        title,
        description,
    } = formData;

    const onSubmit = async (e) => {
        e.preventDefault();
        addPoster(formData)
    };
    
    return (
        <div className="snow">
            <div className="loginForm">
                <h2 style={{ textAlign: 'center' }}>Add A Poster</h2>
                <Form onSubmit={(e) => onSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Images</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Image 1"
                            name="image 1"
                            value={images[0]}
                            onChange={(e) => onChange(e)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="Image 2"
                            name="image 2"
                            value={images[1]}
                            onChange={(e) => onChange(e)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="Image 3"
                            name="image 3"
                            value={images[2]}
                            onChange={(e) => onChange(e)}
                        />

                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={title}
                            onChange={(e) => onChange(e)}
                        />

                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Decription"
                            name="description"
                            value={description}
                            onChange={(e) => onChange(e)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add Post
                    </Button>
                </Form>
            </div>
        </div>
    )
}

PosterForm.propTypes = {
    addPoster: PropTypes.func.isRequired,
}

export default connect(null, { addPoster })(PosterForm)
