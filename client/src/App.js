import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Login from "./components/Login";
import Navbar from './components/NavBar';
import Register from "./components/Register";
import Home from "./pages/Home";
import 'semantic-ui-css/semantic.min.css'
import FetchUser from "./components/FetchUser";
import Footer from "./components/Footer";
import PlayerForm from "./pages/PlayerForm";
import Players from "./pages/Players";
import TeamContainer from "./pages/TeamContainer";
import CreateTeams from "./pages/CreateTeams";
import Teams from "./pages/Teams";
import AdminPage from "./pages/AdminPage";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <>
      <Navbar />
      <FetchUser>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <ProtectedRoute exact path="/my_cats" component={MyCats} /> */}

            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route exact path="/teams" component={TeamContainer} />
            <Route exact path="/gen_team" component={Teams} />
            <ProtectedRoute exact path="/admin_page" component={AdminPage} />

            <Route exact path="/add_player" component={Players} />
            <Route exact path="/add_player/new" component={PlayerForm} />
            <Route exact path="/add_player/edit/:id" component={PlayerForm} />
          </Switch>
      </FetchUser>
      <Footer />
    </>
  );
}

export default App;