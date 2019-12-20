import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Content/Home';
import { Login } from './components/Account/Login';
import { Register } from './components/Account/Register';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Register' component={Register}/>
      </Layout>
    );
  }
}
