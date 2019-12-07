import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Login } from './components/Account/Login';
import { Register } from './components/Account/Register';
import { Profile } from './components/Account/Profile';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />
        <Route path='/Profile' component={Profile} />
      </Layout>
    );
  }
}
