import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Indigo from './Indigo';

const Blue = () => (
    <div>
        <h2 className='blue'>Blue</h2>
        <Route path='/blue/indigo' component={Indigo} />
        <NavLink exact to='/blue'>Blue only</NavLink>
        <NavLink to='/blue/indigo'>Add Indigo</NavLink>
    </div>
);

export default Blue;