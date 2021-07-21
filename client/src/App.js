import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Login from "./components/Login";
import Navbar from './components/NavBar';
import Register from "./components/Register";
import Home from "./pages/Home";
import 'semantic-ui-css/semantic.min.css'
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";
import MyCats from "./pages/MyCats";

function App() {
  return (
    <>
      <Navbar />
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/my_cats" component={MyCats} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
