import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Orange from './Orange';
import Yellow from './Yellow';

const Red = () => (
    <div>
        <h2 className='red'>Red</h2>
        <Route path='/red/orange' component={Orange} />
        <Route path='/red/yellow' component={Yellow} />
        <Link to='/red'>Red Only</Link>
        <Link to='/red/orange'>Add Orange</Link>
        <Link to='/red/yellow'>Add Yellow</Link>
    </div>
);

export default Red;