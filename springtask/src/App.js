import React from "react";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import {  HashRouter,Routes ,Route } from "react-router-dom";
import { NoMatch } from "./Components/Home/NoMatch";
import { Provider } from "react-redux";
import { ConfigStore } from "./Components/State/Store";
import './App.css';

const store=ConfigStore();

export const App = () => {
var x="/Home"
  return (
    
      <Provider store={store}>
        <React.Fragment>
          <HashRouter>
            <Routes>
            <Route exact path={x} component={()=><Home authorized={false} />}> 
            <Home/>
             </Route>
              <Route exact path="/"><Login/></Route>
              <Route path='*' component={NoMatch}></Route>
            </Routes>
          </HashRouter>
        </React.Fragment>
      </Provider>
     
    
  );
}

export default App;
