import React from "react";
import ReactDOM from "react-dom";
import "./styles/utils/index.scss";
import App from "./Pages/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { IsConnectedProvider, TokenProvider } from "./Utils/Context";
import {
  GetDataPotagerProvider,
  HandleSubmitCreatePlantProvider,
} from "./Utils/Context/potager";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GetDataPotagerProvider>
        <HandleSubmitCreatePlantProvider>
          <TokenProvider>
            <IsConnectedProvider>
              <App />
            </IsConnectedProvider>
          </TokenProvider>
        </HandleSubmitCreatePlantProvider>
      </GetDataPotagerProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
