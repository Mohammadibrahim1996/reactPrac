import React from 'react'
import { data } from './EmpData'

export const Prac=()=> {
    return (
        <div>
            <h1>this is mapping parctice Component</h1>
            {data.map((data)=>{
 return(
            
            <div>
                <img  src={data.img} alt="" />
                <h3>Name:{data.name}</h3>
                <h3>Age:{data.age}</h3>
                <h3>Contact:{data.contact}</h3>
                <h3>Adress:{data.add}</h3>
                <h3>Org:{data.OrgName}</h3>
            </div>
 )
            })};
        </div>
    )
}
