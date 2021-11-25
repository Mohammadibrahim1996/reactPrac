import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayOut from './Components/LayOut.jsx';
import Home from './Components/Home/Home.jsx';
import Profile from './Components/Views/Profile.jsx';
import Settings from './Components/Settings/Settings.jsx';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <LayOut>
          <Switch>
            <Route exact path ="./">
              <Home/>
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/settings">
              <Settings/>
            </Route>
          </Switch>
        </LayOut>
      </div>
    </Router>
  );
}

export default App;
