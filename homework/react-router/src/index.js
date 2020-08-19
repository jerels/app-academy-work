import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './Users';


const Root = () => {
  const users = {
    1: { name: 'Andrew' },
    2: { name: 'Raymond' }
  };

  return (
    <BrowserRouter>
      <div>
        <h1>Hi, I'm Root!</h1>
        <Route exact path='/' component={App} />
        <Route exact path='/users' render={() => <Users users={users} />} />
        <Route path='/hello' render={() => <h1>Hello!!</h1>} />
        <Route path='/users/:userId' render={(props) => <Profile users={users} {...props} />} />
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
