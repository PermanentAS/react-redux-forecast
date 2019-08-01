import React, { Component } from "react";

import ErrorIndicator from "./../error-indicator";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    console.log("Error-boundry :" ,this.state.hasError);
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}
