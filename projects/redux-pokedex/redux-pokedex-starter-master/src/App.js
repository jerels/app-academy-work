import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import LoginPanelRedux from './LoginPanelRedux';
import PokemonBrowser from './PokemonBrowserRedux';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.needLogin === true
      ? <Redirect to='/login' />
      : <Component {...props} />
  )} />
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={LoginPanelRedux} />
          <PrivateRoute
            path='/'
            exact={true}
            needLogin={this.props.needLogin}
            component={PokemonBrowser}
          />
          <PrivateRoute
            path='/pokemon/:pokemonId'
            exact={true}
            needLogin={this.props.needLogin}
            component={PokemonBrowser}
          />
        </Switch>
      </BrowserRouter>
    );
  }
};


const mapStateToProps = state => {
  return {
    currentUserId: state.authentication.id,
    needLogin: !state.authentication.id
  };
}

export default connect(mapStateToProps)(App);