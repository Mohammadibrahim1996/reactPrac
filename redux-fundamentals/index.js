const redux = require('redux')
const reduxLogger =  require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleWare = redux.applyMiddleware
const logger = reduxLogger.createLogger()




///action is an object which has property type and action creator is a function which returns action.

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";


function buycake(){
    return {
        type : BUY_CAKE ,
        info : "first redux action"
    }
}
function buyIceCream(){
    return {
        type : BUY_ICECREAM

    }
}


///// reducer accepts two parameter (previuosstate, action) => newState;

//  const initialState = {
//      numOfCakes : 10,  ////this is privious state
//     numOfIceCreams : 20
//     }
   
    const initialCakeState = {
        numOfCakes : 10
    }

    const initialIceCreamState = {
        numOfIceCreams : 20
    }

///reducer
//  const reducer = (state = initialState ,action)=>{
//      switch(action.type){
//          case BUY_CAKE :return{
//              ...state,
//              numOfCakes: state.numOfCakes - 1
//          }

//          case BUY_ICECREAM :return{
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }

//          default: return state
//      }
//  }

 const  iceCreamReducer = (state = initialIceCreamState ,action)=>{
    switch(action.type){
        case BUY_ICECREAM :return{
           ...state,
           numOfIceCreams: state.numOfIceCreams - 1
       }

        default: return state
    }
}

const  cakeReducer = (state = initialCakeState ,action)=>{
    switch(action.type){
        case BUY_CAKE :return{
           ...state,
           numOfCakes: state.numOfCakes - 1
       }

        default: return state
    }
}


 /////store
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream : iceCreamReducer
})
 const store = createStore(rootReducer,applyMiddleWare(logger))
 console.log('initial state', store.getState())
 const unsubscribe = store.subscribe(()=>{})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
