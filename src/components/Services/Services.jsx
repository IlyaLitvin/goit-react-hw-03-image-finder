import axios from "axios";
import PropTypes from "prop-types";

const Services = (query, page, TOKEN) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${TOKEN}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data.hits);
};

Services.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  TOKEN: PropTypes.string.isRequired,
};

export default Services;
