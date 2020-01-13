import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

class Item extends Component {

    constructor(props) {
        super(props);

        this.handleDeletePet = this.handleDeletePet.bind(this);
    }

    handleDeletePet() {
        let url = `api/order/deleteOrder/${this.props.id}`;
        // alert(url);
        let method = 'DELETE';
        // debugger;
        let response = fetch(url, {
            method: method,
            mode: 'cors'
        });
        if(response.ok){
            window.location.replace("/Profile");
            alert("Delete!");
        }
        window.location.replace("/Profile");
        alert("Delete!")
    }

    render() {
        return (
            <tr>
                <td className="text-center">{this.props.name}</td>
                <td className="text-center">{this.props.start}</td>
                <td className="text-center">{this.props.end}</td>
                <td className="text-center">
                    <Button onClick={this.handleDeleteOrder} className="m-2" style={{ boxShadow: '5px 5px 10px #cccccc' }} variant="outline-danger" size="sm">Delete</Button>
                </td>
            </tr>
        );
    }
}

export class OrdersTable extends Component {
    render() {
        return (
            <Table striped bordered hover responsive className="mt-2">
                <thead>
                    <tr className="text-center">
                        <th className="text-center">User Name</th>
                        <th className="text-center">Start Date</th>
                        <th className="text-center">End Date</th>
                        <th className="text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map(function (item) {
                            return <Item key={item.iD_Order} id={item.iD_Order} name={item.orderUserName} start={item.startDateTime} end={item.endDateTime} />
                        })
                    }
                </tbody>
            </Table>
        );
    }
}