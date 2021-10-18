import React, { Component} from "react";
 class ClassCount extends Component{
  constructor(props){
      super(props);
  }
  render(){
      return(
          <div>
              <h1> Class Component Counter</h1>
              <h4>Count:
              </h4>
            <button>increament</button>
            <button>Decreament</button>

          </div>
      )
  }
  
 }
 export default ClassCount
