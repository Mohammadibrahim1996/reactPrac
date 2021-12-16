import React from "react";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { BrowserRouter as Router,Routes,Switch ,Route } from "react-router-dom";
import { NoMatch } from "./Components/Home/NoMatch";
import { Provider } from "react-redux";
import { ConfigStore } from "./Components/State/Store";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store=ConfigStore();

export const App = () => {
var x="/Home"
  return (
    
      <Provider store={store}>
        <React.Fragment>
          <Router>
            <Switch>
            <Route  path={x} component={()=><Home authorized={true} />}> 
            <Home/>
            <h1>heelo</h1>
             </Route>
              <Route  path="/"><Login/></Route>
              <Route path='*' component={NoMatch}></Route>
            </Switch>
          </Router>
        </React.Fragment>
      </Provider>
     
    
  );
}

export default App;
