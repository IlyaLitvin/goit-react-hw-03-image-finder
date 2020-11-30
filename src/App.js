import React, { Component } from "react";
// import PropTypes from "prop-types";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Services from "./components/Services";

export default class App extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  state = {
    data: [],
    loading: false,
    error: null,
    query: "",
    page: 1,
    TOKEN: "18953404-219a87b5236596fa40acd8a55",
    found: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.fetchArticles();
    }
  }

  handleSearch = (querySearch) => {
    this.setState({
      query: querySearch,
      page: 1,
      data: [],
    });
  };

  fetchArticles = () => {
    const { query, page, TOKEN } = this.state;
    Services.Services(query, page, TOKEN)
      .then((data) => {
        {
          if (data.length === 0) {
            this.setState({ found: false });
          } else {
            this.setState((prevState) => ({
              data: [...prevState.data, ...data],
              page: prevState.page + 1,
              found: true,
            }));
          }
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { data, loading, error, found } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        {error && <p>ERORR</p>}
        {loading && <p>Loading...</p>}
        {loading ? <p>Loading...</p> : <ImageGallery data={data} />}
        {data.length > 0 && !loading && found && (
          <Button onClick={this.fetchArticles} />
        )}
      </div>
    );
  }
}
