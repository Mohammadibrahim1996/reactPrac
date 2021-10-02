import React from "react";
import { CommonHeading } from "../Common/CommonHeading";
  
export const Header = () => {
    return(
        <div style={{display:"flex"}}>
            <CommonHeading/>
            <img src="logo192.png" alt="microsoft"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse corporis, sequi reprehenderit ea atque blanditiis eligendi provident quae facere ipsam eum, cupiditate dolorum ipsa temporibus.</p>
        </div>
    );
};