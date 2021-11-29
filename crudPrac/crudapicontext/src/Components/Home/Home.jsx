import React ,{useState} from 'react'
import {Button} from "react-bootstrap";
import {RegistartionForm} from '../Registration/RegistartionForm';

import  "./Home.css";

export const Home=()=> {
 const [ valid, setValid]=useState(false);
 const handleAddClient=()=>{
     setValid(!valid)
 }

    return (
        <div>
            <h1>medi4sure
            </h1>
            <Button className="button" onClick={handleAddClient}>Registration</Button>
            {valid &&
            <RegistartionForm/>
        }
        </div>
    )
}
