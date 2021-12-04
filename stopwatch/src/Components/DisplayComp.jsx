import React from "react";

function DisplayComp(props) {
  return (
    <div style={{border:"3px solid black",borderRadius:"20px",width:"250px",marginBottom:"20px",padding:"10px"}}>
      <div>
      <span style={{fontSize:"24px"}}> {(props.time.h  >= 10) ? props.time.h : "0" + props.time.h}</span> &nbsp; : &nbsp;
      <span style={{fontSize:"24px"}}>  {(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span> &nbsp; : &nbsp;
      <span style={{fontSize:"24px"}}>  {(props.time.s  >= 10) ? props.time.s : "0" + props.time.s}</span> &nbsp; : &nbsp;
      <span style={{fontSize:"24px"}}>  {(props.time.ms  >= 10) ? props.time.ms : "0" + props.time.ms}</span> &nbsp; &nbsp;
      </div>
   </div>
  );
}

export default DisplayComp;
