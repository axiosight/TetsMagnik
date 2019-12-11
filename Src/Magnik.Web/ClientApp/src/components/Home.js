import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import {Slider} from './Slider'
import { TriplePanel } from './TriplePanel';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <Container>
        <Slider/>
        <hr/>
        <TriplePanel/>
      </Container>
    );
  }
}