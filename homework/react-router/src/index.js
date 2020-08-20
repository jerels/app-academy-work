import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './Users';
import Profile from './Profile';


const Root = () => {
  const users = {
    1: { name: 'Andrew' },
    2: { name: 'Raymond' }
  };

  const handleClick = () => {
    console.log('Thanks for clicking');
  }

  return (
    <BrowserRouter>
      <div>
        <h1>Hi, I'm Root!</h1>
        <NavLink to='/' exact activeStyle={{ fontWeight: 'bold' }}>App</NavLink>
        <NavLink activeClassName='red' to='/users'>Users</NavLink>
        <NavLink activeClassName='blue' to='/hello'>Hello</NavLink>
        <NavLink activeClassName='green' to='/users/1'>Andrew's Profile</NavLink>
        <NavLink to='/' exact onClick={handleClick}>App with click handler</NavLink>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/users' render={() => <Users users={users} />} />
          <Route path='/hello' render={() => <h1>Hello!!</h1>} />
          <Route path='/users/:userId' render={(props) => <Profile users={users} {...props} />} />
          <Route render={() => <h1>404: Page not found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
