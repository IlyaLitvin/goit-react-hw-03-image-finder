import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";

function ImageGallery({ data, openModal }) {
  const items = data.map((el) => {
    return (
      <ImageGalleryItem
        key={el.id}
        webformatURL={el.webformatURL}
        largeImageURL={el.largeImageURL}
        openModal={openModal}
      />
    );
  });

  return (
    <>
      <ul className="ImageGallery">{items}</ul>
    </>
  );
}

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
