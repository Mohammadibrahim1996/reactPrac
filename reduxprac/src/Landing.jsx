import React,{useState} from 'react';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import { NavBar } from './Components/A-Navigation/NavBar';
import { ProductsParent } from './Components/B-Products/ProductsParent';
import { Cart } from './Components/B-Products/Cart';
import { ProductsDetail } from './Components/B-Products/ProductsDetail';


export const Landing = () => {
    const [search,setSearch]=useState("");
    return (
        <div>
            <BrowserRouter>
            <NavBar setSearch={setSearch}/>
            <Routes>
                <Route path="/" element={<ProductsParent search={search}/>}/>
                <Route path="/cart" element={<Cart/>} />
                <Route path="/detail" element={<ProductsDetail/>} />
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}

