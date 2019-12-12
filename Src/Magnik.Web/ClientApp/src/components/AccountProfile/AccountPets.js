import React, { Component } from 'react';
import { Table, Button, Image, Card, Row, Col } from 'react-bootstrap'
import logo from '../pet.png'

export class AccountPets extends Component {
    render() {
        return (
            <div className="mt-2">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xs={6} md={4} className="text-center">
                                <Button className="m-2" variant="outline-dark" size="sm">Add</Button>
                            </Col>
                            <Col xs={12} md={8}>
                                <p><em> - Is it possible to throw pets? If you got a cat, a dog, no matter who, they become a member of the family! This is the same as throwing your child into the street!</em></p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Table striped bordered hover responsive className="mt-2">
                    <thead>
                        <tr className="text-center">
                            <th className="text-center">Img</th>
                            <th className="text-center">Pet Name</th>
                            <th className="text-center">Age</th>
                            <th className="text-center">Weight</th>
                            <th className="text-center">Sex</th>
                            <th className="text-center"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <Image style={{ width: '81px', height: '81px', }} src={logo} alt="Logo" roundedCircle />
                            </td>
                            <td className="text-center">Mark</td>
                            <td className="text-center">12</td>
                            <td className="text-center">30</td>
                            <td className="text-center">Boy</td>
                            <td className="text-center">
                                <Button className="m-2" variant="outline-success" size="sm">View</Button>
                                <Button className="m-2" variant="outline-info" size="sm">Update</Button>
                                <Button className="m-2" variant="outline-danger" size="sm">Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <Image style={{ width: '81px', height: '81px', }} src={logo} alt="Logo" roundedCircle />
                            </td>
                            <td className="text-center">Mark</td>
                            <td className="text-center">12</td>
                            <td className="text-center">30</td>
                            <td className="text-center">Boy</td>
                            <td className="text-center">
                                <Button className="m-2" variant="outline-success" size="sm">View</Button>
                                <Button className="m-2" variant="outline-info" size="sm">Update</Button>
                                <Button className="m-2" variant="outline-danger" size="sm">Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <Image style={{ width: '81px', height: '81px', }} src={logo} alt="Logo" roundedCircle />
                            </td>
                            <td className="text-center">Mark</td>
                            <td className="text-center">12</td>
                            <td className="text-center">30</td>
                            <td className="text-center">Boy</td>
                            <td className="text-center">
                                <Button className="m-2" variant="outline-success" size="sm">View</Button>
                                <Button className="m-2" variant="outline-info" size="sm">Update</Button>
                                <Button className="m-2" variant="outline-danger" size="sm">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}