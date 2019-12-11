import React, { Component } from 'react';
import { Row, Card, Image } from 'react-bootstrap';
import tOne from './t1.png';
import tSecond from './t2.png';
import tThird from './t3.png';


export class TriplePanel extends Component {
    render() {
        return (
            <Row>
                <div className="col-md-4">
                    <Card>
                        <Card.Body className="text-center">
                            <Image className="border" style={{ width: '180px', height: '180px', }} src={tOne} alt="Logo" roundedCircle />
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card>
                        <Card.Body className="text-center">
                            <Image className="border" style={{ width: '180px', height: '180px', }} src={tSecond} alt="Logo" roundedCircle />
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card>
                        <Card.Body className="text-center">
                            <Image className="border" style={{ width: '180px', height: '180px', }} src={tThird} alt="Logo" roundedCircle />
                        </Card.Body>
                    </Card>
                </div>
            </Row>
        );
    }
}