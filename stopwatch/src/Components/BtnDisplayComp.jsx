import React from "react";


function BtnDisplayComp(props) {
  return (
    
<div>
    {(props.status === 0) ? 
        <button className="btn-watch"  onClick={props.start} 
        style={{width:"200px",
        height:"40px",
        borderRadius:"20px",
        background:"#9980FA",
        backgroundImage:"linear-gradient(to left,#9980FA,#A3CB38)",
        marginLeft:"20px",
        opacity:"0.8",
        boxShadow:"0px 0px 10px #5352ed,0px 0px 20px #5352ed,0px 0px 30px #5352ed,0px 0px 40px #5352ed",
        textShadow:"2px 2px 3px black"
      }}>Start</button> : ""
    }

  {(props.status === 1) ? 
  <div>
      <button onClick={props.stop} style={{width:"100px",height:"30px",borderRadius:"12px",background:"#C4E538"}}>Pause</button>

      <button onClick={props.reset} style={{width:"100px",height:"30px",borderRadius:"12px",background:"#FFC312"}}> Reset</button>
  </div> : ""
    }

    
  {(props.status === 2) ? 
  <div>
      <button onClick={props.resume} style={{width:"100px",height:"30px",borderRadius:"12px",background:"#C4E538"}}>resume</button>

      <button onClick={props.reset} style={{width:"100px",height:"30px",borderRadius:"12px"}}> Reset</button>
  </div> : ""
    }
</div>   
  );
}

export default BtnDisplayComp;
