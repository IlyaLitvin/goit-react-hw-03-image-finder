import axios from "axios";

const Services = (query, page, TOKEN) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${TOKEN}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data.hits);
};
export default Services;
