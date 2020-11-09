import axios from "axios";
//api call from
export default {
  getBooks: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  }
};
