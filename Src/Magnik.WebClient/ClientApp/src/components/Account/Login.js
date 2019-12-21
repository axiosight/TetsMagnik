import React, { Component } from 'react';
import { Row, Form, Button, Card } from 'react-bootstrap';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "", emailIsValid: false,
            password: "", passwordIsValid: false,
            rememberMe: false,
            modalError: false,
            modalSignIn: false,
            errors: []
        };

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onRememberMe = this.onRememberMe.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.modalError = this.modalError.bind(this);
        this.modalSignIn = this.modalSignIn.bind(this);
    }

    modalError() {
        this.setState({
            modalError: !this.state.modalError
        });
    }

    modalSignIn() {
        this.setState({
            modalSignIn: !this.state.modalSignIn
        });
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    onChangeEmail(e) {
        let val = e.target.value;
        let valid = this.validateEmail(val);
        this.setState({ email: val, emailIsValid: valid });
    }

    validatePassword(password) {
        return password.length > 0;
    }

    onChangePassword(e) {
        let val = e.target.value;
        let valid = this.validatePassword(val);

        this.setState({ password: val, passwordIsValid: valid });
    }

    onRememberMe(e) {
        this.setState({ rememberMe: false });
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (this.state.emailIsValid === true && this.state.passwordIsValid === true) {
            let form = new FormData();
            form.append('email', this.state.email);
            form.append('password', this.state.password);
            form.append('rememberMe', this.state.rememberMe);
            form.append('returnUrl', "");

            let url = "api/account/login";
            let method = 'POST';

            let response = await fetch(url, {
                method: method,
                mode: 'cors',
                body: form
            });

            let responseJson = "";

            if (response.ok) {
                window.location.replace("/Profile");
            } else {
                responseJson = response.json();
                responseJson.then(results => {
                    this.setState({ errors: results.errors });

                    if (this.state.errors.length > 0) {
                        this.setState({ modalSignIn: !this.state.modalSignIn });
                    }
                });

            }
        }
        else {
            this.setState({
                modalError: !this.state.modalError
            });
        }
    }

    renderForm() {
        let emailColor = this.state.emailIsValid === true ? "green" : "lightGray";
        let passwordColor = this.state.passwordIsValid === true ? "green" : "lightGray";

        return (
            <Card className="text-center border p-5 col-md-6 box-shadow" style={{ width: '23rem', backgroundColor: '#faf7f7', boxShadow: '5px 5px 10px #cccccc', margin: '0 auto' }}>
                <Form  onSubmit={this.handleSubmit}>
                    <Form.Text className="m-4" style={{ fontSize: '20pt' }}><strong>Sign In</strong></Form.Text>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control onChange={this.onChangeEmail} className="mb-2 col-md-8 offset-md-2" type="email" placeholder="Enter email" style={{ borderColor: emailColor }} />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control onChange={this.onChangePassword} className="mb-2 col-md-8 offset-md-2" type="password" placeholder="Password" style={{ borderColor: passwordColor }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicRememberMe">
                        <Form.Text className="text-muted">Remember me?</Form.Text>
                        <Form.Check />
                    </Form.Group>
                    <Button className="mb-2 col-md-4" style={{ boxShadow: '5px 5px 10px #cccccc' }} variant="primary" type="submit">Submit</Button>
                    <Form.Text className="text-muted">Not register yet?</Form.Text>
                    <NavLink tag={Link} className="text-info" to="/Register">Sign Up</NavLink>
                </Form>
            </Card>
        );
    }

    render() {
        return (
            <Row>
                {this.renderForm()}
                <div>
                    <Modal isOpen={this.state.modalError} >
                        <ModalHeader toggle={this.modalError} >
                            Incorrect login or password
                        </ModalHeader>
                        <ModalBody>
                            <p><b>Email example:</b> qwerty@gmail.com</p>
                            <p><b>Password:</b> The length of the Password must not be less than 6 characters.</p>
                        </ModalBody>
                    </Modal>
                    <Modal isOpen={this.state.modalSignIn} >
                        <ModalHeader toggle={this.modalSignIn} >
                            Sign In Error
                        </ModalHeader>
                        <ModalBody>
                            <ul>
                                {
                                    this.state.errors.map(e => {
                                        return <li key={e.length}>{e}</li>
                                    })
                                }
                            </ul>
                        </ModalBody>
                    </Modal>
                </div>
            </Row>
        );
    }
}