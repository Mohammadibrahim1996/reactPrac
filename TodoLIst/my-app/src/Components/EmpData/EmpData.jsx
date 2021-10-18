import React,{useEffect, useState} from 'react';
import { useSelector} from 'react-redux';
import { getAllEmp } from '../State/Selectors/empSelector';
import {addNewEmp} from '../State/Actions/empAction';

 export const EmpData = () =>{
   const selector = useSelector(getAllEmp);
   const [empData, setEmpData]=useState();
   const [empName,setEmpName]=useState();
   const [empAge,setEmpAge]=useState();
   const [empAdd,setEmpAdd]=useState();
   useEffect(()=>{setEmpData(selector)},[selector]);
   const dispatch=useDispatch();
   const handleDispatch =()=>{
    dispatch(addNewEmp(empName,empAge,empAdd))
   };
    return(


        <div style={{border:"2px solid black"}}>
            {empData&&empData.map((items)=>{
                return(
        <div>
            <h1> Emp Name:{items.empName}</h1>
            <h1> Emp Age:{items.empAgg}</h1>
            <h1> Emp Add:{items.empAdd}</h1>
        </div>
                );
            })}
            <input type="text" placeholder="empName" onChange={(e)=>setEmpName.target.value}></input>
            <input type="text" placeholder="empAge" onChange={(e)=>setEmpAge.target.value}></input>
            <input type="text" placeholder="empAdd" onChange={(e)=>setEmpAdd.target.value}></input>
        </div>
    );
};
           