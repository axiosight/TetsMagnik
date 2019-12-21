import React, { Component } from 'react';
import { Row, Form, Button, Card } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "", emailIsValid: false,
            password: "", passwordIsValid: false,
            name: "", nameIsValid: false,
            surname: "", surnameIsValid: false,
            mobile: "", mobileIsValid: false,
            confirmPassword: "", confirmPasswordIsValid: false,
            errors: [],
            modalRegister: false,
            modalError: false
        }

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.modalRegister = this.modalRegister.bind(this);
        this.modalError = this.modalError.bind(this);
    }

    modalError() {
        this.setState({
            modalError: !this.state.modalError
        });
    }

    modalRegister() {
        this.setState({
            modalRegister: !this.state.modalRegister
        });
    }

    validateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validateName(name) {
        return name.length > 2;
    }

    validateSurname(surname) {
        return surname.length > 2;
    }

    validateMobile(mobile) {
        let res = /375[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}/;
        return res.test(mobile);
    }

    validatePassword(password) {
        return password.length > 6;
    }

    validateConfirmPassword(confirmPassword) {
        return confirmPassword === this.state.password;
    }

    onChangeEmail(e) {
        let val = e.target.value;
        let valid = this.validateEmail(val);
        this.setState({ email: val, emailIsValid: valid });
    }

    onChangeName(e) {
        let val = e.target.value;
        let valid = this.validateName(val);
        this.setState({ name: val, nameIsValid: valid });
    }

    onChangeSurname(e) {
        let val = e.target.value;
        let valid = this.validateSurname(val);
        this.setState({ surname: val, surnameIsValid: valid });
    }

    onChangeMobile(e) {
        let val = e.target.value;
        let valid = this.validateMobile(val);
        this.setState({ mobile: val, mobileIsValid: valid });
    }

    onChangePassword(e) {
        let val = e.target.value;
        let valid = this.validatePassword(val);
        this.setState({
            password: val,
            passwordIsValid: valid,
            confirmPassword: "",
            confirmPasswordIsValid: false
        });
    }

    onChangeConfirmPassword(e) {
        let val = e.target.value;
        let valid = this.validateConfirmPassword(val);
        this.setState({ confirmPassword: val, confirmPasswordIsValid: valid })
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (this.state.emailIsValid === true && this.state.nameIsValid === true && this.state.surnameIsValid === true && this.state.mobileIsValid === true && this.state.passwordIsValid === true && this.state.confirmPasswordIsValid === true) {
            let form = new FormData();
            form.append('email', this.state.email);
            form.append('name', this.state.name);
            form.append('surname', this.state.surname);
            form.append('mobile', this.state.mobile);
            form.append('password', this.state.password);
            form.append('passwordConfirm', this.state.confirmPassword);

            let url = "api/account/register";
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
                        this.setState({ modalRegister: !this.state.modalRegister });
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
        let nameColor = this.state.nameIsValid === true ? "green" : "lightGray";
        let surnameColor = this.state.surnameIsValid === true ? "green" : "lightGray";
        let mobileColor = this.state.mobileIsValid === true ? "green" : "lightGray";
        let passwordColor = this.state.passwordIsValid === true ? "green" : "lightGray";
        let confirmPasswordColor = this.state.confirmPasswordIsValid === true ? "green" : "lightGray";

        return (
            <Card className="text-center border p-5 col-md-6 box-shadow" style={{ width: '23rem', backgroundColor: '#faf7f7', boxShadow: '5px 5px 10px #cccccc', margin: '0 auto' }}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Text className="m-4" style={{ fontSize: '20pt' }}><strong>Sign Up</strong></Form.Text>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control onChange={this.onChangeEmail} className="mb-2 col-md-8 offset-md-2" type="email" placeholder="Enter email" style={{ borderColor: emailColor }} />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control onChange={this.onChangeName} className="mb-2 col-md-8 offset-md-2" type="text" placeholder="Enter your name" style={{ borderColor: nameColor }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicSurname">
                        <Form.Control onChange={this.onChangeSurname} className="mb-2 col-md-8 offset-md-2" type="text" placeholder="Enter your surname" style={{ borderColor: surnameColor }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Control onChange={this.onChangeMobile} className="mb-2 col-md-8 offset-md-2" type="tel" placeholder="Enter your phone" style={{ borderColor: mobileColor }} />
                        <Form.Text className="text-muted">Format for tel 375(XX)XXX-XX-XX</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control onChange={this.onChangePassword} className="mb-2 col-md-8 offset-md-2" type="password" placeholder="Password" style={{ borderColor: passwordColor }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Control onChange={this.onChangeConfirmPassword} className="mb-2 col-md-8 offset-md-2" type="password" placeholder="Confirm Password" style={{ borderColor: confirmPasswordColor }} />
                    </Form.Group>
                    <Button className="mb-2 col-md-4" style={{ boxShadow: '5px 5px 10px #cccccc' }} variant="primary" type="submit">Submit</Button>
                </Form>
            </Card>
        );
    }

    render() {
        return (
            <Row>
                {this.renderForm()}
                <div>
                    <Modal isOpen={this.state.modalRegister} >
                        <ModalHeader toggle={this.modalRegister} >Incorrect login or password</ModalHeader>
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
                    <Modal isOpen={this.state.modalError} >
                        <ModalHeader toggle={this.modalError} >Sign In Error</ModalHeader>
                        <ModalBody>
                            <p><b>Email example:</b> qwerty@gmail.com</p>
                            <p><b>Name example:</b> Nick</p>
                            <p><b>Surname example:</b> Qwerty</p>
                            <p><b>Surname example:</b> 375112223344</p>
                            <p><b>Password:</b> The length of the Password must not be less than 6 characters.</p>
                        </ModalBody>
                    </Modal>
                </div>
            </Row>
        );
    }
}