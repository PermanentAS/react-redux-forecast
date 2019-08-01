import React from "react";
import "./error-indicator.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div>
        <i class="fas fa-exclamation-triangle icon" />
      </div>
      <span className="error-title">Foercast Error</span>
      <span className="error-text">
        Check your input and please reload this page.
      </span>
    </div>
  );
};

export default ErrorIndicator;
