import React,{useState} from 'react';

export default function Child1({handlDisp}) {
    const[inp,setInp]=useState("");
    const inpHandle=() =>{
        handlDisp(inp)
        
    }
    return (
        <div>
            <input type="text" onChange={(e)=>setInp(e.target.value)} />
            <button onClick={()=>inpHandle()} > click </button>
        </div>
    )
}
