import { Route, Switch } from "react-router-dom";
import React, { useContext } from "react";
// Import scss
import "./App.scss";
// Import Page
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import Calendar from "../Calendar";
import Connexion from "../Connexion";
import Register from "../Register";
import UserSpace from "../SpaceUser";
import Header from '../../Components/Header'
// Import Context
import { IsConnectedContext } from "../../Utils/Context";

function App() {
  const { isConnected } = useContext(IsConnectedContext);
  
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/calendrier">
          <Calendar />
        </Route>
        <Route path="/connexion">
          <Connexion />
        </Route>
        <Route path="/inscription">
          <Register />
        </Route>
        {isConnected && (
          <Route path="/espace-utilisateur">
            <UserSpace />
          </Route>
        )}

        <Route path="/" exact>
          <Header />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
