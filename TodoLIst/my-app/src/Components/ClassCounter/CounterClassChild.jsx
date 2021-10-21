import React,{Component} from "react";
  export class CounterClassChild extends Component{
    handleIncrement=()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
        };
        handleDecrement=()=>{
            this.setState((prevState)=>({count:prevState.count-1}))
        };

     render(){
         return(
             <div>
                 <h4>Count:{this.props.showcount}</h4>
             </div>
         )
     }
 }