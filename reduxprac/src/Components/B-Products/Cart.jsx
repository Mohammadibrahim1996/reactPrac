import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Cart = () => {
 const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.myReducer.cart);
  return (
    <div>
      <h1>cart</h1>

      <div className="card-parent">
        {cartItems.map((item) => {
          return (
            <div className="cards">
              <img
                className="image"
                width="250px"
                height="250px"
                src={item.image}
                alt=""
              />
              <h4>{item.title.substr(0, 20) + ".."}</h4>
              <h4>Price:{item.price}</h4>
              <button
               onClick={()=>dispatch({type:"REMOVE-PRODUCT",data:item})}>
                Remove
              </button>
              <Link to="/detail">
              <button onClick={()=>dispatch({type:"SELECTED-PRODUCT",data:item})}>View Details</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
