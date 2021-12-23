const redux = require('redux')
const createStore = redux.createStore




///action is an object which has property type and action creator is a function which returns action.

const BUY_CAKE = "BUY_CAKE";


function buycake(){
    return {
        type : BUY_CAKE ,
        info : "first redux action"
    }
}


///// reducer accepts two parameter (previuosstate, action) => newState;

 const initialState = {
     numOfCakes : 10,  ////this is privious state
 }

///reducer
 const reducer = (state = initialState ,action)=>{
     switch(action.type){
         case BUY_CAKE :return{
             ...state,
             numOfCakes: state.numOfCakes - 1
         }
         default: return state
     }
 }


 /////store

 const store = createStore(reducer)
 console.log('initial state', store.getState())
 const unsubscribe = store.subscribe(()=>console.log('updated state',store.getstate()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
unsubscribe()
