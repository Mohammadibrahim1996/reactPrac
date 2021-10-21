import React,{Component} from "react";
  export class CounterClassChild extends Component{
     render(){
         return(
             <div>
                 <h4>Count:{this.props.showcount}</h4>
             </div>
         )
     }
 }