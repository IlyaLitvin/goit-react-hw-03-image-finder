import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";

function ImageGallery({ data }) {
  const items = data.map((el) => {
    return (
      <ImageGalleryItem
        key={el.id}
        webformatURL={el.webformatURL}
        largeImageURL={el.largeImageURL}
      />
    );
  });

  return (
    <>
      <ul className="ImageGallery">{items}</ul>
    </>
  );
}

ImageGallery.propTypes = {};

export default ImageGallery;
