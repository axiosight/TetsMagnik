import React, { Component } from 'react';
import { Button, Card, Row, Col, Form } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { PetsTable } from './PetsTable';

export class ProfilePets extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            petName: "", petNameIsValid: false,
            petAge: "", petAgeIsValid: false,
            petWeight: "", petWeightIsValid: false,
            petSex: "", petSexIsValid: false,
            errors: [],
            modalPets: false,
            modalError: false,
            modalAddPet: false
        };

        this.modalError = this.modalError.bind(this);
        this.modalAddPet = this.modalAddPet.bind(this);
        this.onChangePetName = this.onChangePetName.bind(this);
        this.onChangePetAge = this.onChangePetAge.bind(this);
        this.onChangePetWeight = this.onChangePetWeight.bind(this);
        this.onChangePetSex = this.onChangePetSex.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    modalError() {
        this.setState({
            modalError: !this.state.modalError
        });
    }

    validatePetName(petName) {
        return petName.length > 1;
    }

    validatePetAge(petAge) {
        return petAge.length > 1;
    }

    validatePetWeight(petWeight) {
        return petWeight.length > 1;
    }

    validatePetSex(petSex) {
        return petSex.length > 0;
    }

    onChangePetName(e) {
        let val = e.target.value;
        let valid = this.validatePetName(val);
        this.setState({ petName: val, petNameIsValid: valid });
    }

    onChangePetAge(e) {
        let val = e.target.value;
        let valid = this.validatePetAge(val);
        this.setState({ petAge: val, petAgeIsValid: valid });
    }

    onChangePetWeight(e) {
        let val = e.target.value;
        let valid = this.validatePetWeight(val);
        this.setState({ petWeight: val, petWeightIsValid: valid });
    }

    onChangePetSex(e) {
        let val = e.target.value;
        let valid = this.validatePetSex(val);
        this.setState({ petSex: val, petSexIsValid: valid });
    }

    modalAddPet() {
        this.setState({
            modalAddPet: !this.state.modalAddPet
        });
    }

    async loadData() {
        debugger;
        let url = "api/pet/getPetsAccount";

        let response = await fetch(url);
        if (response.ok) {
            let responseJson = response.json();

            responseJson.then(results => {
                // console.log(results);
                this.setState({
                    pets: results
                });
            });
        }
    }

    async componentDidMount() {
        await this.loadData();
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (this.state.petNameIsValid === true && this.state.petAgeIsValid === true && this.state.petWeightIsValid === true && this.state.petSexIsValid === true) {

            let form = new FormData();
            form.append('petName', this.state.petName);
            form.append('petAge', parseInt(this.state.petAge, 10));
            form.append('petWeight', parseInt(this.state.petWeight, 10));

            let url = "api/pet/addPet";
            let method = 'POST';

            let response = await fetch(url, {
                method: method,
                mode: 'cors',
                body: form
            });
            console.log(response);       
            let responseJson = "";

            if (response.ok) {
                window.location.replace("/Profile");
                alert("New pet add!");
            } else {
                responseJson = response.json();
                responseJson.then(results => {
                    this.setState({ errors: results.message });

                    this.setState({ modalError: !this.state.modalError });

                });
                alert("Not Valid Data!");
            }
        }
        else {
            alert("Not Valid Data!");
        }
    }

    renderAddPetForm() {
        let petNameColor = this.state.petNameIsValid === true ? "green" : "lightGray";
        let petAgeColor = this.state.petAgeIsValid === true ? "green" : "lightGray";
        let petWeightColor = this.state.petWeightIsValid === true ? "green" : "lightGray";
        let petSexColor = this.state.petSexIsValid === true ? "green" : "lightGray";
        return (
            <Card className="text-center border p-5 box-shadow" style={{ width: 'auto', margin: '0 auto' }}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicPetName">
                        <Form.Control onChange={this.onChangePetName} value={this.state.petName} className="mb-2 col-md-8 offset-md-2" type="text" placeholder="Enter pet name" style={{ borderColor: petNameColor }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicAge">
                        <Form.Control onChange={this.onChangePetAge} value={this.state.petAge} className="mb-2 col-md-8 offset-md-2" type="text" placeholder="Enter pet age" style={{ borderColor: petAgeColor }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicWeight">
                        <Form.Control onChange={this.onChangePetWeight} value={this.state.petWeight} className="mb-2 col-md-8 offset-md-2" type="tel" placeholder="Enter pet weight" style={{ borderColor: petWeightColor }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicSex">
                        <Form.Control onChange={this.onChangePetSex} value={this.state.petSex} className="mb-2 col-md-8 offset-md-2" type="text" placeholder="Enter pet sex" style={{ borderColor: petSexColor }} />
                    </Form.Group>
                    <Button className="mb-2 col-md-4" style={{ boxShadow: '5px 5px 10px #cccccc' }} variant="primary" type="submit">Submit</Button>
                </Form>
            </Card>
        );
    }

    render() {
        return (
            <div className="mt-2">
                <Card style={{ boxShadow: '5px 5px 10px #cccccc' }}>
                    <Card.Body>
                        <Row>
                            <Col xs={6} md={4}>
                                <Button onClick={this.modalAddPet} className="m-2" style={{ boxShadow: '5px 5px 10px #cccccc' }} variant="outline-dark" size="md">Add Pet</Button>
                            </Col>
                            <Col xs={12} md={8}>
                                <p><em> - Is it possible to throw pets? If you got a cat, a dog, no matter who, they become a member of the family! This is the same as throwing your child into the street!</em></p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <PetsTable data={this.state.pets} />
                <div>
                    <Modal isOpen={this.state.modalAddPet} >
                        <ModalHeader toggle={this.modalAddPet} >
                            Add Pet
                    </ModalHeader>
                        <ModalBody>
                            {this.renderAddPetForm()}
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