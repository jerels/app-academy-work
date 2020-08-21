import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Red from './Red';
import Green from './Green';
import Blue from './Blue';
import Violet from './Violet';

const Rainbow = () => (
    <div>
        <h1>Rainbow Router!</h1>
        <div id='rainbow'>
            <Route path='/red' component={Red} />
            <Route path='/green' component={Green} />
            <Route path='/blue' component={Blue} />
            <Route path='/violet' component={Violet} />
            <Link to='/red'>Red</Link>
            <Link to='/green'>Green</Link>
            <Link to='/blue'>Blue</Link>
            <Link to='/violet'>Violet</Link>
        </div>
    </div>
);

export default Rainbow;