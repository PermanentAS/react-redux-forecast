import React from "react";

const {
  Provider: ForecastServiceProvider,
  Consumer: ForecastServiceConsumer
} = React.createContext();

export { ForecastServiceProvider, ForecastServiceConsumer };