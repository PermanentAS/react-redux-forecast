import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import App from "./App";
import ForecastService from "./services/forecast-service";
import { ForecastServiceProvider } from "./components/forecast-service-context";
import ErrorBoundry from "./components/error-boundry";

import store from "./store";

const forecastService = new ForecastService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <Router>
        <ForecastServiceProvider value={forecastService}>
          <Router>
            <App />
          </Router>
        </ForecastServiceProvider>
      </Router>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
