import React from "react";
import { ForecastServiceConsumer } from "../forecast-service-context";

const withForecastService = () => Wrapped => {
    return props => {
      return (
        <ForecastServiceConsumer>
          {forecastService => {
            return <Wrapped {...props} forecastService={forecastService} />;
          }}
        </ForecastServiceConsumer>
      );
    };
  };
  
  export default withForecastService;