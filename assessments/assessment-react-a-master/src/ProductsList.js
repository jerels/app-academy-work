import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductsContext from './ProductsContext';
import AddProductLink from './AddProductLink';

const ProductsList = () => {
    return (
        <div className='products-list'>
            <AddProductLink />
            <ProductsContext.Consumer>
                {value => value.products.map(product => {
                    const path = `/products/${product.id}`;
                    return (
                        <NavLink to={path} key={product.id} activeClassName='is-selected'>
                            {product.name}
                        </NavLink>
                    )
                })}
            </ProductsContext.Consumer>
        </div>
    )
}

export default ProductsList;