import "./App.css";
import { ColorChange } from "./pages/ColorChange";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <h1>hello World</h1>
      <Profile />
      <Login />
      <ColorChange />
    </div>
  );
}

export default App;
