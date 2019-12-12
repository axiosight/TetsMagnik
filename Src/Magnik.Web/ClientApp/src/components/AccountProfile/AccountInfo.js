import React, { Component } from 'react';
import { Card, Image, Button, Row, Col } from 'react-bootstrap'
import logo from '../Tables/ava.png';

export class AccountInfo extends Component {
    render() {
        return (
            <div className="mt-2">
                <Row>
                    <Col xs={6} md={4}>
                        <Card className="mb-2" style={{ width: '23rem' }}>
                            <Row>
                                <Card.Body className="text-center">
                                    <Image style={{ width: '151px', height: '162px', }} src={logo} alt="Logo" roundedCircle />
                                    <hr />
                                    <Button className="m-0" variant="outline-success" size="sm">Update Profile</Button>
                                </Card.Body>
                            </Row>
                        </Card>
                        <Card className="mb-2" style={{ width: '23rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    <p className="text-center"><em>Comments: </em></p>
                                    <hr />
                                    <code>Now you dont have any commnents..</code>
                                    <hr />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="mb-2" style={{ width: '46rem' }}>
                            <Card.Body style={{height: '430px'}}>
                                <Card.Title><em>Hi, Niktos.V@tut.by</em></Card.Title>
                                <Card.Text>
                                    <hr />
                                    <p><b>Name: </b>Nikita</p>
                                    <p><b>Surname: </b>Vashkov</p>
                                    <p><b>Phone +</b>375445804011</p>
                                    <p><b>Street: </b>Авакяна 32-3, кв 29</p>
                                    <p><b>ZIP: </b>220202</p>
                                    <p><b>About you: </b>dsndjdnjksnjkndsjknfjknsdjknfjkndsjknfkjsdnjfknsjdvfdvfdvfdvfdvfdvfdvfdvfdvdfvfdvfdvkkfsnjdkfnkjsdfnsdsd</p>
                                    <hr />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}