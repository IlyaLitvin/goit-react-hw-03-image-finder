import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    term: "",
  };

  handleChange = (e) => {
    this.setState({ term: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    const { term } = this.state;
    return (
      <div>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              value={term}
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />
          </form>
        </header>
      </div>
    );
  }
}
