import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../App.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('password dont match');
        } else {
            console.log('Success');
        }
    }

    return (
        <div className="snow">
            <div className="loginForm">
                <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            name="name"
                            value={name}
                            onChange={(e) => onChange(e)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={(e) => onChange(e)}
                            required
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => onChange(e)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password2"
                            placeholder="Password2"
                            value={password2}
                            onChange={(e) => onChange(e)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign up!
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;
