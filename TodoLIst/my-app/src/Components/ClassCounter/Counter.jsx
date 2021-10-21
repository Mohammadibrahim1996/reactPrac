import React,{Component} from "react";
import { CounterClassChild } from "./CounterClassChild";

 export class ClassCounter extends Component {
    constructor(props){
        super(props);
            this.state={count:0};
        }
        handleIncrement=()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
        };
        handleDecrement=()=>{
            this.setState((prevState)=>({count:prevState.count-1}))
        };
        render() {
            return (
                <div>
                    <CounterClassChild showcount={this.state.count}/>
              <button onClick={this.handleIncrement}>Increment</button>
              <button onClick={this.handleDecrement}>Decrement</button>

          </div>
        );
    }
}
   
 