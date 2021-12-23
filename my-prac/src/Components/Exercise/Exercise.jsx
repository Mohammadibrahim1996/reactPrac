import React,{useState} from 'react';
import Child1 from "./Child1";
import Child from "./Child.jsx";

export default function Exercise() {
    const [disp,setDisp]=useState("");
    function handlDisp(inp) {
        setDisp(inp);
    };
    return (
        <div>
            <Child1 handlDisp={handlDisp}/>
            <Child disp={disp}/>
        </div>
    )
}
