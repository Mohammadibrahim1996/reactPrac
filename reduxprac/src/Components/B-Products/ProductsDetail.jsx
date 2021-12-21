import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const ProductsDetail = () => {
    const dispatch = useDispatch()
    const selectedItem = useSelector((state)=> state.myReducer.selected[0])
    return (
        <div>
            <h1>Hellooo</h1>
            <div className='cards'>
            <img  className='image' width="250px" height="250px" src={selectedItem.image} alt="" />
            <h4>{selectedItem.title.substr(0,20)+".."}</h4>
            <h4>Price:{selectedItem.price}</h4>
            <button onClick={()=>dispatch({type:"ADD-CART",data:selectedItem})}>Add To Cart</button>
           
        </div>
        </div>
    )
}
