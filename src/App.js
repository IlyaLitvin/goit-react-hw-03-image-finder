import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Services from "./components/Services";
import Loader from "./components/Loader";
import Modal from "./components/Modal";

export default class App extends Component {
  state = {
    data: [],
    loading: false,
    error: null,
    query: "",
    page: 1,
    largeImageUrl: null,
  };

  modalClose = () => {
    this.setState((prevState) => ({ largeImageUrl: !prevState.largeImageUrl }));
  };

  openModal = (largeImageUrl) => {
    this.setState({
      largeImageUrl: largeImageUrl,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.fetchArticles();
    }
    const { scrollTop, clientHeight } = document.documentElement;
    window.scrollTo({
      top: scrollTop + clientHeight + 10000,
      behavior: "smooth",
    });
  }

  handleSearch = (querySearch) => {
    this.setState({
      query: querySearch,
      page: 1,
      data: [],
    });
  };

  fetchArticles = () => {
    const { query, page } = this.state;
    this.setState({ loading: true });
    Services.Services(query, page)
      .then((data) => {
        if (data.length < 1) {
          this.setState({ error: true });
        } else {
          this.setState((prevState) => ({
            data: [...prevState.data, ...data],
            page: prevState.page + 1,
            error: false,
          }));
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { data, loading, error, largeImageUrl } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        {error && <p>ERORR</p>}
        {loading ? (
          <Loader />
        ) : (
          <ImageGallery openModal={this.openModal} data={data} />
        )}
        {data.length > 0 && !loading && <Button onClick={this.fetchArticles} />}
        {largeImageUrl && (
          <Modal
            onSubmit={this.openModal}
            largeImageUrl={largeImageUrl}
            modalClose={this.modalClose}
          />
        )}
      </div>
    );
  }
}
