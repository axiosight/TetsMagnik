import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import { AccountCard } from './Tables/AccountCard';
import { SearchSitter } from './Search/SearchSitter'

export class PetSitters extends Component {
  static displayName = PetSitters.name;

  render() {
    return (
        <Row>
          <Col xs={12} md={8}>
            <AccountCard></AccountCard>
          </Col>
          <Col xs={6} md={4}>
              <SearchSitter/>
          </Col>
        </Row>
    );
  }
}