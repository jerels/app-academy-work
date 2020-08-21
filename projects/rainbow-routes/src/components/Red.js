import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Orange from './Orange';
import Yellow from './Yellow';

const Red = () => (
    <div>
        <h2 className='red'>Red</h2>
        <Route path='/red/orange' component={Orange} />
        <Route path='/red/yellow' component={Yellow} />
        <NavLink exact to='/red'>Red Only</NavLink>
        <NavLink to='/red/orange'>Add Orange</NavLink>
        <NavLink to='/red/yellow'>Add Yellow</NavLink>
    </div>
);

export default Red;