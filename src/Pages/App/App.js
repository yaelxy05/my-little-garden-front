import { Route, Switch } from "react-router-dom";
// import scss
import "./App.scss";
// import Page
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import Calendar from "../Calendar";
import Home from '../Home';
import Connexion from '../Connexion';
import Register from '../Register';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/calendrier">
          <Calendar />
        </Route>
        <Route path="/connexion" >
          <Connexion />
        </Route>
        <Route path="/inscription" >
          <Register />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    
      <Footer />
    </div>
  );
}

export default App;
