import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import { ProfileInfo } from '../Profile/ProfileInfo';
import { ProfilePets } from '../Profile/ProfilePets';
import { ProfileServices } from '../Profile/ProfileServices';
import { ProfileOrders } from '../Profile/ProfileOrders';

export class Profile extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="Info" id="uncontrolled-tab-example">
                <Tab eventKey="Info" title="Info">
                    <ProfileInfo />
                </Tab>
                <Tab eventKey="Pets" title="Pets">
                    <ProfilePets />
                </Tab>
                <Tab eventKey="Services" title="Services">
                    <ProfileServices />
                </Tab>
                <Tab eventKey="Orders" title="Orders">
                    <ProfileOrders />
                </Tab>
            </Tabs>
        );
    }
}