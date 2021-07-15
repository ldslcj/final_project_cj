import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from './components/NavBar';
import Register from "./components/Register";
import About from "./pages/About";
import Examples from "./pages/Examples";
import Home from "./pages/Home";
import Things from "./pages/Things";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
