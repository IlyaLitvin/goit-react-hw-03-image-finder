import React from "react";
import PropTypes from "prop-types";

function ImageGalleryItem({ webformatURL }) {
  return (
    <>
      <li className="ImageGalleryItem">
        <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
      </li>
    </>
  );
}

ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;
