import React from "react";
import "./error-indicator.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div>
        <i class="fas fa-cloud icon" />
      </div>
      <span className="error-title">Forecast App Error</span>
      <span className="error-text">
        Check your input and try again
      </span>
    </div>
  );
};

export default ErrorIndicator;
