import React, { Component } from 'react';
import { ProfileComments } from './ProfileComments';
import { Card, Image, Button, Row, Col, Form } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import logo from '../StaticFiles/ava.png';

export class ProfileInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            comments: [],
            modalUpdateAccount: false,
            email: "", emailIsValid: true,
            name: "", nameIsValid: true,
            surame: "", surnameIsValid: true,
            mobile: "", mobileIsValid: true,
            street: "", streetIsValid: true,
            zip: "", zipIsValid: true,
            description: "", descriptionIsValid: true,
            errors: "",
            modalRegister: false,
            modalError: false
        };

        this.modalUpdateAccount = this.modalUpdateAccount.bind(this);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeStreet = this.onChangeStreet.bind(this);
        this.onChangeZip = this.onChangeZip.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.modalError = this.modalError.bind(this);
    }

    modalError() {
        this.setState({
            modalError: !this.state.modalError
        });
    }

    validateName(name) {
        return name.length > 2;
    }

    validateSurname(surame) {
        return surame.length > 2;
    }

    validateMobile(mobile) {
        let res = /375[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}/;
        return res.test(mobile);
    }

    validateStreet(street) {
        return street.length > 2;
    }

    validateZip(zip) {
        return zip.length > 2;
    }

    validateDescription(description) {
        return description.length > 0;
    }

    onChangeName(e) {
        let val = e.target.value;
        let valid = this.validateName(val);
        this.setState({ name: val, nameIsValid: valid });
    }

    onChangeSurname(e) {
        let val = e.target.value;
        let valid = this.validateSurname(val);
        this.setState({ surame: val, surnameIsValid: valid });
    }

    onChangeMobile(e) {
        let val = e.target.value;
        let valid = this.validateMobile(val);
        this.setState({ mobile: val, mobileIsValid: valid });
    }

    onChangeStreet(e) {
        let val = e.target.value;
        let valid = this.validateStreet(val);
        this.setState({ street: val, streetIsValid: valid });
    }

    onChangeZip(e) {
        let val = e.target.value;
        let valid = this.validateZip(val);
        this.setState({ zip: val, zipIsValid: valid });
    }

    onChangeDescription(e) {
        let val = e.target.value;
        let valid = this.validateDescription(val);
        this.setState({ description: val, descriptionIsValid: valid });
    }

    modalUpdateAccount() {
        this.setState({
            modalUpdateAccount: !this.state.modalUpdateAccount
        });
    }

    async handleSubmit(e) {
        e.preventDefault();

        debugger;
        if (this.state.nameIsValid === true && this.state.surnameIsValid === true && this.state.mobileIsValid === true && this.state.streetIsValid === true && this.state.zipIsValid === true && this.state.descriptionIsValid === true) {

            let form = new FormData();
            form.append('userId', this.state.user.userId);
            form.append('name', this.state.name);
            form.append('surame', this.state.surame);
            form.append('mobile', this.state.mobile);
            form.append('street', this.state.street);
            form.append('zip', this.state.zip);
            form.append('desciption', this.state.description);

            let url = "api/account/updateAccount";
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
                    this.setState({ errors: results.message });

                    this.setState({ modalError: !this.state.modalError });

                });

            }
        }
        else {
            alert("Not Valid Data!");
        }
    }

    renderUpdateModal() {
        let nameColor = this.state.nameIsValid === true ? "green" : "lightGray";
        let surnameColor = this.state.surnameIsValid === true ? "green" : "lightGray";
        let mobileColor = this.state.mobileIsValid === true ? "green" : "lightGray";
        let streetColor = this.state.streetIsValid === true ? "green" : "lightGray";
        let zipColor = this.state.zipIsValid === true ? "green" : "lightGray";
        let descriptionColor = this.state.descriptionIsValid === true ? "green" : "lightGray";

        return (
            <Card className="text-center border p-5 box-shadow" style={{ width: 'auto', margin: '0 auto' }}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Control onChange={this.onChangeName} value={this.state.name} className="mb-2 col-md-8 offset-md-2" type="text" placeholder="Enter your name" style={{ borderColor: nameColor }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicSurname">
                        <Form.Control onChange={this.onChangeSurname} value={this.state.surame} className="mb-2 col-md-8 offset-md-2" type="text" placeholder="Enter your surname" style={{ borderColor: surnameColor }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Control onChange={this.onChangeMobile} value={this.state.mobile} className="mb-2 col-md-8 offset-md-2" type="tel" placeholder="Enter your phone" style={{ borderColor: mobileColor }} />
                        <Form.Text className="text-muted">Format for tel 375(XX)XXX-XX-XX</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicStreet">
                        <Form.Control onChange={this.onChangeStreet} value={this.state.street} className="mb-2 col-md-8 offset-md-2" type="text" placeholder="Enter your street" style={{ borderColor: streetColor }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicZIP">
                        <Form.Control onChange={this.onChangeZip} value={this.state.zip} className="mb-2 col-md-8 offset-md-2" type="text" placeholder="Enter your zip" style={{ borderColor: zipColor }} />
                        <Form.Text className="text-muted">Format for ZIP ex. 222000</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicDescription">
                        <Form.Control onChange={this.onChangeDescription} value={this.state.description} className="mb-2 col-md-8 offset-md-2" type="text" placeholder="About you" style={{ borderColor: descriptionColor }} />
                    </Form.Group>
                    <Button className="mb-2 col-md-4" style={{ boxShadow: '5px 5px 10px #cccccc' }} variant="primary" type="submit">Update</Button>
                </Form>
            </Card>
        );
    }

    async loadData() {
        let url = "api/account/getAccount";

        let response = await fetch(url);

        if (response.ok) {
            let responseJson = response.json();
            responseJson.then(results => {
                // console.log(results);

                this.setState({
                    user: results,
                    name: results.name,
                    surame: results.surame,
                    mobile: results.mobile,
                    street: results.street,
                    zip: results.zip,
                    description: results.desciption
                });
            });
        }
    }

    async loadCommentData() {
        let url = "api/comment/getCommentOfAccount";

        let response = await fetch(url);

        if (response.ok) {
            let responseJson = response.json();
            responseJson.then(results => {
                console.log(results);

                this.setState({
                    comments: results
                });
            });
        }
    }

    async componentDidMount() {
        await this.loadData();
        await this.loadCommentData();
    }

    render() {
        return (
            <div className="mt-2">
                <Row>
                    <Col xs={6} md={4}>
                        <Card className="mb-2" style={{ width: '23rem', boxShadow: '5px 5px 10px #cccccc' }}>
                            <Row>
                                <Card.Body className="text-center">
                                    <Image style={{ width: '151px', height: '162px', boxShadow: '5px 5px 10px #cccccc' }} src={logo} alt="Logo" roundedCircle />
                                    <hr />
                                    <Button onClick={this.modalUpdateAccount} className="m-0" style={{ boxShadow: '5px 5px 10px #cccccc' }} variant="outline-success" size="sm">Update Profile</Button>
                                </Card.Body>
                            </Row>
                        </Card>
                        <Card className="mb-2" style={{ width: '23rem', boxShadow: '5px 5px 10px #cccccc' }}>
                            <Card.Body>
                                <p className="text-center"><em>Comments: </em></p>
                                <hr />
                                <ProfileComments dataComments={this.state.comments} />
                                <hr />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="mb-2" style={{ width: '46rem', boxShadow: '5px 5px 10px #cccccc' }}>
                            <Card.Body style={{ height: '430px' }}>
                                <Card.Title><em>Hi, {this.state.user.email}</em></Card.Title>
                                <Card.Text>
                                    <hr />
                                    <p><b>Name: </b>{this.state.user.name}</p>
                                    <p><b>Surname: </b>{this.state.user.surame}</p>
                                    <p><b>Phone +</b>{this.state.user.mobile}</p>
                                    <p><b>Street: </b>{this.state.user.street}</p>
                                    <p><b>ZIP: </b>{this.state.user.zip}</p>
                                    <p><b>About you: </b>{this.state.user.desciption}</p>
                                    <hr />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div>
                    <Modal isOpen={this.state.modalUpdateAccount} >
                        <ModalHeader toggle={this.modalUpdateAccount} >
                            Update Account
                        </ModalHeader>
                        <ModalBody>
                            {this.renderUpdateModal()}
                        </ModalBody>
                    </Modal>
                    <Modal>
                        <Modal isOpen={this.state.modalError} >
                            <ModalHeader toggle={this.modalError} >Error</ModalHeader>
                            <ModalBody>
                                <p>{this.state.errors}</p>
                            </ModalBody>
                        </Modal>
                    </Modal>
                </div>
            </div>
        );
    }
}