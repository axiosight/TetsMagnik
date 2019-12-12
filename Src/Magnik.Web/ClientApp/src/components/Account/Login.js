import React, { Component } from 'react'
import { Row, Form, Button, Card } from 'react-bootstrap'
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

export class Login extends Component {
    render() {
        return (
            <Row className="">
                <Card className="text-center border p-5 mb-4 col-md-6 offset-md-3 box-shadow" style={{ width: '23rem', backgroundColor: '#faf7f7' }}>
                    <Form>
                        <Form.Text className="m-4" style={{ fontSize: '20pt' }}><strong>Sign In</strong></Form.Text>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control className="mb-2 col-md-8 offset-md-2" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control className="mb-2 col-md-8 offset-md-2" type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className="mb-2 col-md-4" variant="primary" type="submit">Submit</Button>
                        <Form.Text className="text-muted">Not register yet?</Form.Text>
                        <NavLink tag={Link} className="text-info" to="/Register">Sign Up</NavLink>
                    </Form>
                </Card>
            </Row>
        );
    }
}