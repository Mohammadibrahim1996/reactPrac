import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ProductsChild } from './ProductsChild';
import "./Product.css"

export const ProductsParent = ({search}) => {
    const [products,setProducts] = useState([]);
    const dispatch = useDispatch();
    const stateProduct=useSelector((state)=> state.myReducer.product)
    useEffect(()=>{
        const filtered = stateProduct.filter((item)=> item.title.toLowerCase().includes(search.toLowerCase()));
        setProducts(filtered);
    },[search])
 const getApiData= async ()=>{
     const apiData= await axios.get("https://fakestoreapi.com/products");
     console.log(apiData.data);
     dispatch({type:"ADD-PRODUCT", data : apiData.data });
     setProducts(apiData.data);
 };
 useEffect(()=>{
     getApiData();
 },[])
    return (
        <div>
            <h1>PRODUCTS PARENT</h1>
            <div className='card-parent'>
            {
                products.map((item)=>{
                    return <ProductsChild item={item}/>
                })
            }
            </div>
        </div>
    )
}
