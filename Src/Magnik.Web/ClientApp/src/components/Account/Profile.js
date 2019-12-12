import React, { Component } from 'react'
import { AccountInfo } from '../AccountProfile/AccountInfo'
import { AccountPets } from '../AccountProfile/AccountPets'
import { AccountServices } from '../AccountProfile/AccountServices'
import { AccountOrders } from '../AccountProfile/AccountOrders'
import {Tabs, Tab} from 'react-bootstrap'

export class Profile extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="Info" id="uncontrolled-tab-example">
                <Tab eventKey="Info" title="Info">
                    <AccountInfo />
                </Tab>
                <Tab eventKey="Pets" title="Pets">
                    <AccountPets />
                </Tab>
                <Tab eventKey="Services" title="Services">
                    <AccountServices />
                </Tab>
                <Tab eventKey="Orders" title="Orders">
                    <AccountOrders />
                </Tab>
            </Tabs>
        );
    }
}