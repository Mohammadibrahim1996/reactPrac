import React,{useState,useEffect} from 'react';
import { ChildCounter } from './ChildCounter';

 export  function Counter(){
     const[count,setCount]=useState(0);
useEffect(()=>{
document.title=`you click ${count}`
},[count]) 
   return(
        <div>
            <p> count:{count}
            </p>

            <ChildCounter count={count} setCount={setCount}/>
            {/* <button onClick={()=>setCount(count+1)}>increament</button>
            <button onClick={()=>setCount(count-1)}>decrement</button> */}
            
            
            
            </div>
    )
}