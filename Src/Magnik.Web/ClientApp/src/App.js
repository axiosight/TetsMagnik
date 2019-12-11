import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import {Login} from './components/Account/Login';
import {Register} from './components/Account/Register';
import {PetSitters} from './components/PetSitters';
import {Profile} from './components/Account/Profile';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Register' component={Register}/>
        <Route exact path='/Petsit' component={PetSitters}/>
        <Route exact path='/Profile' component={Profile}/>
      </Layout>
    );
  }
}
