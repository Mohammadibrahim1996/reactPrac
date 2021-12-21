import React from 'react';
import "./Product.css";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const ProductsChild = ({item}) => {
    const dispatch =  useDispatch();
    return (
        <div className='cards'>
            <img  className='image' width="250px" height="250px" src={item.image} alt="" />
            <h4>{item.title.substr(0,20)+".."}</h4>
            <h4>Price:{item.price}</h4>
            <button onClick={()=>dispatch({type:"ADD-CART",data:item})}>Add To Cart</button>
            <Link to="/detail">
            <button onClick={()=>dispatch({type:"SELECTED-PRODUCT",data:item})}>View Details</button>
            </Link>
        </div>
    )
}
