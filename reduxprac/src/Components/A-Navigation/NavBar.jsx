import React from 'react';
import{Link} from "react-router-dom";

export const NavBar = ({setSearch}) => {
    return (
        <div style={{padding:"25px" ,margin:"15px" }}>
            <Link to="/"> <i><b>MyReduxApp</b></i> </Link>
            <input type="search" onChange={(e)=>setSearch(e.target.value)} />
            <button>Search</button>
            <Link to="/cart"><b>Cart:</b></Link>
        </div>
    )
}
