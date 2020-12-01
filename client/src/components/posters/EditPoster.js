import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editPoster, getPoster } from '../../actions/poster';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Alert from '../layouts/Alert';

const EditProfile = ({ editPoster, getPoster, poster:{ poster, loading }, match, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        images1: '',
        images2: '',
        images3: '',
        title: '',
        description: '',
    });

    const { images1, images2, images3, title, description } = formData;

    const images = [images1, images2, images3];

    // useEffect(() => {
    //     getPoster(match.params.id);
    //     setFormData({
    //         images1: loading || !poster.images[0] ? '' : poster.images[0],
    //         images2: loading || !poster.images[1] ? '' : poster.images[1],
    //         images3: loading || !poster.images[2] ? '' : poster.images[2],
    //         title: poster.title,
    //         description: poster.description
    //     })
    // }, [loading]);

    const onChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        }); 

    const history = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();
        editPoster(match.params.id, { images, title, description });
        let path = `/`; 
        history.push(path);
    };

    return (
        <div className="snow">
            <div className="loginForm">
                <h2 style={{ textAlign: 'center' }}>Edit Poster</h2>
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
                            as="textarea"
                            rows={3}
                            placeholder="Decription"
                            name="description"
                            value={description}
                            onChange={(e) => onChange(e)}
                        />
                    </Form.Group>

                    <Alert />

                    <Button variant="primary" type="submit">
                        Edit Poster
                    </Button>
                </Form>
            </div>
        </div>
    );
};

EditProfile.propTypes = {
    editPoster: PropTypes.func.isRequired,
    getPoster: PropTypes.func.isRequired,
    poster: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    poster: state.poster,
    auth: state.auth,
});

export default connect(mapStateToProps, { editPoster, getPoster })(EditProfile);
