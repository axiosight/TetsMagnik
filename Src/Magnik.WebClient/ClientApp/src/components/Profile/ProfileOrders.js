import React, { Component } from 'react';
import { OrdersTable } from './OrdersTable';

export class ProfileOrders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            errors: []
        };

    }

    async loadData() {
        let url = "api/order/getOrder";

        let response = await fetch(url);
        if (response.ok) {
            let responseJson = response.json();

            responseJson.then(results => {
                // console.log(results);
                this.setState({
                    orders: results
                });
            });
        }
    }

    async componentDidMount() {
        await this.loadData();
    }

    render() {
        return (
            <div>
                <OrdersTable data={this.state.orders} />
            </div>
        );
    }
}