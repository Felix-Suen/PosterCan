import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPoster } from '../../actions/poster';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Alert from '../layouts/Alert';

const PosterForm = ({ addPoster }) => {
    const [formData, setFormData] = useState({
        images1: '',
        images2: '',
        images3: '',
        title: '',
        description: '',
    });

    const { images1, images2, images3, title, description } = formData;

    const images = [images1, images2, images3];

    const onChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        }); 

    const history = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();
        addPoster({ images, title, description });
        let path = `/`; 
        history.push(path);
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
                            name="images1"
                            value={images1}
                            onChange={(e) => onChange(e)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="Image 2"
                            name="images2"
                            value={images2}
                            onChange={(e) => onChange(e)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="Image 3"
                            name="images3"
                            value={images3}
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

                    <Alert />

                    <Button variant="primary" type="submit">
                        Add Post
                    </Button>
                </Form>
            </div>
        </div>
    );
};

PosterForm.propTypes = {
    addPoster: PropTypes.func.isRequired,
};

export default connect(null, { addPoster })(PosterForm);
