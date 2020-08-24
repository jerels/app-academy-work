import React from 'react';
import { NavLink } from 'react-router-dom';

const AddProductLink = () => {
    return (
        <NavLink to='/products/new' activeClassName='is-selected'>
            New Product
        </NavLink>
    );
}

export default AddProductLink;