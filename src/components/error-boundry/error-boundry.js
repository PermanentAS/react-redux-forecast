import React, { Component } from "react";
import { connect } from "react-redux";
import { errorCatched } from "./../../actions";

import ErrorIndicator from "../error-indicator";

class ErrorBoundry extends Component {
  componentDidCatch() {
    this.props.errorCatched();
  }

  render() {
    if (this.props.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}

const mapStateToProps = ({ hasError }) => {
  return {
    hasError
  };
};

const mapDispatchToProps = { errorCatched };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBoundry);
