import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>

            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only: {stock} available in stock - order Soon</small></p>
                <button className='cartBtn' onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;