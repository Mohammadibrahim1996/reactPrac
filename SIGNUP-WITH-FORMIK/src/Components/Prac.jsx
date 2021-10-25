import React,{useState} from 'react';

export const Prac =()=>{
        const[items,setItems=useState([]);
          const addItem=()=>{
              setItems([{id:items.length,numbers:Math.floor}])
          }
    return(
        <div>
            <h3>useState with Arrays</h3>
            <button onClick={addItem}>Add Item</button>
            {items.map((numbers)=>{
                <li>
                </li>
            })}
        </div>
    )
}
