import React, { Component } from 'react'
import { Row, Form, Button, Card } from 'react-bootstrap'

export class Register extends Component {
    render() {
        return (
            <Row>
                <Card className="text-center border p-5 mb-4 col-md-6 offset-md-3 box-shadow" style={{ width: '23rem', backgroundColor: '#faf7f7' }}>
                    <Form>
                        <Form.Text className="m-4" style={{fontSize: '20pt'}}><strong>Sign Up</strong></Form.Text>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control className="mb-2 col-md-8 offset-md-2" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Control className="mb-2 col-md-8 offset-md-2" type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicSurname">
                            <Form.Control className="mb-2 col-md-8 offset-md-2" type="text" placeholder="Enter your surname" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Control className="mb-2 col-md-8 offset-md-2" type="tel" placeholder="Enter your phone" />
                            <Form.Text className="text-muted">Format for tel +375(XX)XXX-XX-XX</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control className="mb-2 col-md-8 offset-md-2" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Control className="mb-2 col-md-8 offset-md-2" type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        <Button className="mb-2 col-md-4" variant="primary" type="submit">Submit</Button>
                    </Form>
                </Card>
            </Row>
        );
    }
}