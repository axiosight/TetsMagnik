import React, { Component } from 'react';
import { Row, Card, Button } from 'react-bootstrap';
import logo from './ava.png';
import Image from 'react-bootstrap/Image';

var bgColors = {
    "Default": "#faf8f7",
    "Blue": "#00B1E1",
    "Cyan": "#37BC9B",
    "Green": "#8CC152",
    "Red": "#E9573F",
    "Yellow": "#F6BB42",
};

export class AccountCard extends Component {
    render() {
        return (
            <Row>
                <Card className="m-1 mb-2" style={{ width: '23rem', backgroundColor: bgColors.Default, boxShadow: '7px 7px 12px #cccccc' }}>
                    <Card.Body className="text-center">
                        <Image style={{ width: '171px', height: '180px', }} src={logo} alt="Logo" roundedCircle />
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Niktos.V@tut.by</Card.Title>
                        <Card.Text>
                            <hr />
                            <p><b>Name: </b>Nikita</p>
                            <p><b>Surname: </b>Vashkov</p>
                            <p><b>Phone +</b>375445804011</p>
                            <hr />
                        </Card.Text>
                        <Button variant="outline-success">View</Button>
                    </Card.Body>
                </Card>
                <Card className="m-1 mb-2" style={{ width: '23rem', backgroundColor: bgColors.Default, boxShadow: '7px 7px 12px #cccccc' }}>
                    <Card.Body className="text-center">
                        <Image style={{ width: '171px', height: '180px', }} src={logo} alt="Logo" roundedCircle />
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Niktos.V@tut.by</Card.Title>
                        <Card.Text>
                            <hr />
                            <p><b>Name: </b>Nikita</p>
                            <p><b>Surname: </b>Vashkov</p>
                            <p><b>Phone +</b>375445804011</p>
                            <hr />
                        </Card.Text>
                        <Button variant="outline-success">View</Button>
                    </Card.Body>
                </Card>
                <Card className="m-1 mb-2" style={{ width: '23rem', backgroundColor: bgColors.Default, boxShadow: '7px 7px 12px #cccccc' }}>
                    <Card.Body className="text-center">
                        <Image style={{ width: '171px', height: '180px', }} src={logo} alt="Logo" roundedCircle />
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Niktos.V@tut.by</Card.Title>
                        <Card.Text>
                            <hr />
                            <p><b>Name: </b>Nikita</p>
                            <p><b>Surname: </b>Vashkov</p>
                            <p><b>Phone +</b>375445804011</p>
                            <hr />
                        </Card.Text>
                        <Button variant="outline-success">View</Button>
                    </Card.Body>
                </Card>
                <Card className="m-1 mb-2" style={{ width: '23rem', backgroundColor: bgColors.Default, boxShadow: '7px 7px 12px #cccccc' }}>
                    <Card.Body className="text-center">
                        <Image style={{ width: '171px', height: '180px', }} src={logo} alt="Logo" roundedCircle />
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Niktos.V@tut.by</Card.Title>
                        <Card.Text>
                            <hr />
                            <p><b>Name: </b>Nikita</p>
                            <p><b>Surname: </b>Vashkov</p>
                            <p><b>Phone +</b>375445804011</p>
                            <hr />
                        </Card.Text>
                        <Button variant="outline-success">View</Button>
                    </Card.Body>
                </Card>
                <Card className="m-1 mb-2" style={{ width: '23rem', backgroundColor: bgColors.Default, boxShadow: '7px 7px 12px #cccccc' }}>
                    <Card.Body className="text-center">
                        <Image style={{ width: '171px', height: '180px', }} src={logo} alt="Logo" roundedCircle />
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Niktos.V@tut.by</Card.Title>
                        <Card.Text>
                            <hr />
                            <p><b>Name: </b>Nikita</p>
                            <p><b>Surname: </b>Vashkov</p>
                            <p><b>Phone +</b>375445804011</p>
                            <hr />
                        </Card.Text>
                        <Button variant="outline-success">View</Button>
                    </Card.Body>
                </Card>
                <Card className="m-1 mb-2" style={{ width: '23rem', backgroundColor: bgColors.Default, boxShadow: '7px 7px 12px #cccccc' }}>
                    <Card.Body className="text-center">
                        <Image style={{ width: '171px', height: '180px', }} src={logo} alt="Logo" roundedCircle />
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Niktos.V@tut.by</Card.Title>
                        <Card.Text>
                            <hr />
                            <p><b>Name: </b>Nikita</p>
                            <p><b>Surname: </b>Vashkov</p>
                            <p><b>Phone +</b>375445804011</p>
                            <hr />
                        </Card.Text>
                        <Button variant="outline-success">View</Button>
                    </Card.Body>
                </Card>
            </Row>
        );
    }
}