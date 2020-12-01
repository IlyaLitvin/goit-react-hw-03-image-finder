import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ImageGalleryItem extends Component {
  static propTypes = {
    onClick: PropTypes.func,
  };
  modal = () => {
    this.props.openModal(this.props.largeImageURL);
  };
  render() {
    return (
      <>
        <li className="ImageGalleryItem" onClick={this.modal}>
          <img
            alt=""
            key={this.props.largeImageURL}
            src={this.props.webformatURL}
            className="ImageGalleryItem-image"
          />
        </li>
      </>
    );
  }
}
