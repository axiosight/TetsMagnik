import React, { Component } from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'

export class SearchSitter extends Component {
    render() {
        return (
            <Form inline>
                <FormControl type="search" placeholder="Search" className="mr-md-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        );
    }
}