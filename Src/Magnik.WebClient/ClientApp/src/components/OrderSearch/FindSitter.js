import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { AccountCards } from './AccountCards';
import { SearchSitter } from './SearchSitter';

export class FindSitter extends Component {
    static displayName = FindSitter.name;

    constructor(props) {
        super(props);

        this.state = {
            sitters: []
        };
    }

    async loadData() {
        let url = "api/sitter/getAllSitters";

        let response = await fetch(url);
        if (response.ok) {
            let responseJson = response.json();

            responseJson.then(results => {
                console.log(results);
                this.setState({
                    sitters: results
                });
            });
        }
    }

    async componentDidMount() {
        await this.loadData();
    }

    render() {
        return (
            <Row>
                <Col xs={12} md={8}>
                    <AccountCards data={this.state.sitters}/>
                </Col>
                <Col xs={6} md={4}>
                    <SearchSitter />
                </Col>
            </Row>
        );
    }
}