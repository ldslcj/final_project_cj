import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Login from "./components/Login";
import Navbar from './components/NavBar';
import Register from "./components/Register";
import Home from "./pages/Home";
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <>
    <Navbar />
    <Container>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
      </Container>
      </>
  );
}

export default App;
