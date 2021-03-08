import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    return (
        <div  style={{borderBottom:'1px solid lightgray'}} className="container" className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity:{quantity} </p>
            <p><small>$ {price}</small></p>
            <button className="cartBtn"
            onClick={() =>props.removeProduct(key)}
            >Remove Item</button>
        </div>
    );
};

export default ReviewItem;