import React, { Component } from 'react';
import { Row, Card, Image, Accordion, Button } from 'react-bootstrap';
import tOne from './t1.png';
import tSecond from './t3.jpg';
import tThird from './t2.jpg';


export class TriplePanel extends Component {
    render() {
        return (
            <Row>
                <div className="col-md-4">
                    <Accordion defaultActiveKey="0">
                        <Card style={{backgroundColor: '#d8ffd1'}}>
                            <Card.Body className="text-center">
                                <Image className="border" style={{ width: '180px', height: '180px', }} src={tOne} alt="Logo" roundedCircle />
                            </Card.Body>
                            <Card.Title className="text-center">Drop-in visits</Card.Title>
                            <hr />
                            <Card.Body>
                                <Card.Text>
                                    <em>Is your dog happy to nap at home all day—or is your dog actually a cat?
                                     Instead of a full-time pet sitter, book someone to drop by a few times a day
                                     to feed and check on your pets.</em>
                                </Card.Text>
                            </Card.Body>
                            <Accordion.Toggle className="m-2" as={Button} variant="outline-info" eventKey="0">Drop-in visits are great for:</Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ul>
                                        <li>Low-maintenance dogs</li>
                                        <li>Cats and caged pets</li>
                                        <li>Help with small household tasks to take more money</li>
                                        <li>Long-term bookings</li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                <div className="col-md-4">
                    <Accordion defaultActiveKey="0">
                        <Card style={{backgroundColor: '#d8ffd1'}}>
                            <Card.Body className="text-center">
                                <Image className="border" style={{ width: '180px', height: '180px', }} src={tSecond} alt="Logo" roundedCircle />
                            </Card.Body>
                            <Card.Title className="text-center">Dog Walking</Card.Title>
                            <hr />
                            <Card.Body>
                                <Card.Text>
                                    <em>You can't always predict a crazy day at work, but you can anticipate your dog's needs.
                                     Instead of rushing home at lunch, book a dog walker to give your dog a 30-minute dog walk.</em>
                                </Card.Text>
                            </Card.Body>
                            <Accordion.Toggle className="m-2" as={Button} variant="outline-info" eventKey="0">Dog Walking are greater for:</Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ul>
                                        <li>Your dog walker can stop by as many times as you need</li>
                                        <li>Walk at parks with fresh air</li>
                                        <li>Your pet become strong</li>
                                        <li>Nightly walk under a moon</li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                <div className="col-md-4">
                    <Accordion defaultActiveKey="0">
                        <Card style={{backgroundColor: '#d8ffd1'}}>
                            <Card.Body className="text-center">
                                <Image className="border" style={{ width: '180px', height: '180px', }} src={tThird} alt="Logo" roundedCircle />
                            </Card.Body>
                            <Card.Title className="text-center">Doggy day care</Card.Title>
                            <hr />
                            <Card.Body>
                                <Card.Text>
                                    <em>Thousands of sitters on Magnik are happy to take care of your dog while you're at work or unavailable for the day.
                                    Book a one-time visit, or set up a regular rhythm with your favorite sitter.</em>
                                </Card.Text>
                            </Card.Body>
                            <Accordion.Toggle className="m-2" as={Button} variant="outline-info" eventKey="0">Doggy day care is great for:</Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ul>
                                        <li>Puppies and high-energy dogs</li>
                                        <li>Dogs with special needs, including seniors</li>
                                        <li>Pet parents who work long hours</li>
                                        <li>Dogs with separation anxiety</li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </Row>
        );
    }
}