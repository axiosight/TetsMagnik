import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Slider } from '../Content/Slider';
import { InfoPanel } from '../Content/InfoPanel';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <Container>
                <Slider />
                <hr />
                <div className="text-center" style={{ fontSize: '19pt' }}><strong>About Our Services</strong></div>
                <hr />
                <InfoPanel/>
                <hr />
            </Container>
        );
    }
}