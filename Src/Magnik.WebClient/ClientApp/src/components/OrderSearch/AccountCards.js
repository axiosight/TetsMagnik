import React, { Component } from 'react';
import { Row, Card, Button, Form } from 'react-bootstrap';
import logo from '../StaticFiles/ava.png';
import Image from 'react-bootstrap/Image';
import Select from 'react-select';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

var bgColors = {
    "Default": "#faf8f7",
    "Blue": "#00B1E1",
    "Cyan": "#37BC9B",
    "Green": "#8CC152",
    "Red": "#E9573F",
    "Yellow": "#F6BB42",
};

const Services = [
    { label: "Drop-in visits", value: 'dropvisits' },
    { label: "Dog Walking", value: 'walk' },
    { label: "Doggy day care", value: 'daycare' }
  ];

class CardItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalOrder: false,
            modalAddComment: false,
            title: "", titleIsValid: false,
            message: "", messageIsValid: false
        }

        this.modalOrder = this.modalOrder.bind(this);
        this.modalAddComment = this.modalAddComment.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);

    }

    validateTitle(title) {
        return title.length > 2;
    }

    validateMessage(message) {
        return message.length > 2;
    }

    onChangeTitle(e) {
        let val = e.target.value;
        let valid = this.validateTitle(val);
        this.setState({ title: val, titleIsValid: valid });
    }

    onChangeMessage(e) {
        let val = e.target.value;
        let valid = this.validateMessage(val);
        this.setState({ message: val, messageIsValid: valid });
    }

    modalOrder() {
        this.setState({
            modalOrder: !this.state.modalOrder
        });
    }

    modalAddComment() {
        this.setState({
            modalAddComment: !this.state.modalAddComment
        });
    }

    async handleCommentSubmit(e){
        e.preventDefault();

        debugger;
        if (this.state.titleIsValid === true && this.state.messageIsValid === true) {
            
            let form = new FormData();
            form.append('accountId', this.props.id);
            form.append('title', this.state.title);
            form.append('message', this.state.message);

            let url = "api/comment/addComment";
            let method = 'POST';

            let response = await fetch(url, {
                method: method,
                mode: 'cors',
                body: form
            });

            console.log(response);
            let responseJson = "";

            if (response.ok) {
                window.location.replace("/FindSitters");
                alert("Add!")
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

    renderModalOrder() {
        return (
            <Card className="text-center border p-5 box-shadow" style={{ width: 'auto', margin: '0 auto' }}>
                <Form onSubmit={this.handleOrderSubmit}>
                    <Form.Group controlId="formDateFrom">
                        <Form.Control onChange={this.onChangeName} value={this.state.name} className="mb-2 col-md-8 offset-md-2" type="date" placeholder="DateFrom" />
                    </Form.Group>
                    <Form.Group controlId="formDateTo">
                        <Form.Control onChange={this.onChangeName} value={this.state.name} className="mb-2 col-md-8 offset-md-2" type="date" placeholder="DateFrom" />
                    </Form.Group>
                    <Form.Group>
                        <Select options={Services} className="mb-2 col-md-8 offset-md-2"/>
                    </Form.Group>
                    <Button className="mb-2 col-md-4" style={{ boxShadow: '5px 5px 10px #cccccc' }} variant="primary" type="submit">Submit</Button>
                </Form>
            </Card>
        );
    }

    renderModalComment() {
        let titleColor = this.state.titleIsValid === true ? "green" : "lightGray";
        let messageColor = this.state.messageIsValid === true ? "green" : "lightGray";
        return (
            <Card className="text-center border p-5 box-shadow" style={{ width: 'auto', margin: '0 auto' }}>
                <Form onSubmit={this.handleCommentSubmit}>
                    <Form.Group controlId="title">
                        <Form.Control onChange={this.onChangeTitle} className="mb-2 col-md-8 offset-md-2" type="text" placeholder="Title" style={{ borderColor: titleColor }} />
                    </Form.Group>
                    <Form.Group controlId="message">
                        <Form.Control onChange={this.onChangeMessage} className="mb-2 col-md-8 offset-md-2" type="text" placeholder="Message" style={{ borderColor: messageColor }} />
                    </Form.Group>
                    <Button className="mb-2 col-md-4" style={{ boxShadow: '5px 5px 10px #cccccc' }} variant="primary" type="submit">Submit</Button>
                </Form>
            </Card>
        );
    }

    render() {
        return (
            <div>
                <Card className="m-1 mb-2" style={{ width: '23rem', backgroundColor: bgColors.Default, boxShadow: '7px 7px 12px #cccccc' }}>
                    <Card.Body className="text-center">
                        <Image style={{ width: '171px', height: '180px', boxShadow: '5px 5px 10px #cccccc' }} src={logo} alt="Logo" roundedCircle />
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>{this.props.email}</Card.Title>
                        <Card.Text>
                            <hr />
                            <p><b>Name: </b>{this.props.name}</p>
                            <p><b>Surname: </b>{this.props.surname}</p>
                            <p><b>Phone +</b>{this.props.mobile}</p>
                            <p><b>Street: </b>{this.props.street}</p>
                            <p><b>Description: </b>{this.props.description}</p>
                            <hr />
                        </Card.Text>
                        <Button onClick={this.modalOrder} style={{ boxShadow: '5px 5px 10px #cccccc' }} className="ml-3 mr-2" variant="outline-success">You are my sitter</Button>
                        <Button onClick={this.modalAddComment} style={{ boxShadow: '5px 5px 10px #cccccc' }} variant="outline-info">Give a comment</Button>
                    </Card.Body>
                </Card>
                <Modal isOpen={this.state.modalOrder} >
                    <ModalHeader toggle={this.modalOrder} >
                        Make Order
                        </ModalHeader>
                    <ModalBody>
                        {this.renderModalOrder()}
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.modalAddComment} >
                    <ModalHeader toggle={this.modalAddComment} >
                        Comment
                        </ModalHeader>
                    <ModalBody>
                        {this.renderModalComment()}
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export class AccountCards extends Component {
    render() {
        return (
            <Row>
                {
                    this.props.data.map(function (item) {
                        return <CardItem key={item.userId} id={item.userId} email={item.email} name={item.name} surname={item.surame} mobile={item.mobile} street={item.street} description={item.desciption} />
                    })
                }
            </Row>
        );
    }
}