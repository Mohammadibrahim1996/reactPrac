import React from "react";
import { CommonHeading } from "../Common/CommonHeading";
 export const Footer = () =>{
     return(
         <div style={{backgroundColor:"lightgrey"}}>
             <CommonHeading/>
             <nav>
                 <a href="/">About</a>
                 <a href="/">Contact</a>
                 <a href="/">Services</a>
                 <a href="/">Feed Back</a>
             </nav>
         </div>
     );
 };