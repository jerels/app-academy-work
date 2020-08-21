import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Orange from './Orange';
import Yellow from './Yellow';

const Red = () => (
    <div>
        <h2 className='red'>Red</h2>
        <Route path='/red/orange' component={Orange} />
        <Route path='/red/yellow' component={Yellow} />
    </div>
);

export default Red;