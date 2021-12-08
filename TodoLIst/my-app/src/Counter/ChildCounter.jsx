import React from 'react';


export function ChildCounter ({count,setCount}){
    

    return(
        <div>
            
            <button onClick={()=>setCount(count+3)}>increament</button>
            <button onClick={()=>setCount(count-1)}>decrement</button>
        </div>
    )
}