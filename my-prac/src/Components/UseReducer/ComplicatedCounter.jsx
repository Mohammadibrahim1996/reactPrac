import React ,{useReducer}from 'react';

const initialState ={
    first : 0,
};

const reducer = ( state,action)=>{
    switch(action.type){
        case "increment":
        return {first : state.first + action.value};
        case "decrement":
            return {first: state.first - action.value};
        case "reset":
            return initialState;
            default:
                return state;    
    }
}

export const ComplicatedCounter=()=> {
            const [count,dispatch]= useReducer(reducer,initialState)
    return (
        <div>
            <h1>Complicated Counter Using Reducer</h1>
            <h3>Count :{count.first}</h3>
            <button onClick={()=>dispatch({type:"increment",value:2})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement",value:2})}>Decrement</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
            
        </div>
    )
}
