import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props)
    const {img, name, seller, price, stock, key} = props.product;
    console.log(props.product.key)
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>

            <div>
                <h4 className='product-name'><Link to={"/product/"+key}>{name}</Link></h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only: {stock} available in stock - order Soon</small></p>
                {props.showAddToCart === true && <button button className='cartBtn' 
                    onClick={() => props.handleAddProduct(props.product)}>
                        <FontAwesomeIcon icon={faShoppingCart} />Add to Cart
                </button>}
            </div>
        </div>
    );
};

export default Product;