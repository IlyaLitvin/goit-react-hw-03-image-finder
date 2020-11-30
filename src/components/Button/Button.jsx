import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.props.onClick}>
          Load more
        </button>
      </>
    );
  }
}