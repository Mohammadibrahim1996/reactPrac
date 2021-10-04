// import logo from './logo.svg';
import './App.css';
// import {Header} from "./Components/Navigation/Header";
import {MainBody} from "./Components/Body/MainBody";
// import {Footer} from"./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import{ NavigationBar} from "./Components/Navigation/NavigationBar";
import { BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import {Services} from "./Components/Pages/Home";
import {About} from "./Components/Pages/About";
import {Contact} from "./Components/Pages/Contact";
  


function App() {
  return (
    <div className="App">
      <Router>
      <NavigationBar/>
      <Switch>
        <Route path="/Services"><Services/></Route>
        <Route path="/About"><About/></Route>
        <Route path="/Contact"><Contact/></Route>
        <Route path="/MainBody"><MainBody/></Route>
      </Switch>
      </Router>

      {/* <Header/> */}
      {/* <Footer/> */}
          </div>
  );
}; 

export default App;
