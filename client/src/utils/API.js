import axios from "axios";
// import moment from "moment";


export default {
  getBooks: function (query) {
    return axios.get("/api/books", { params: { q: query } });
  },
  getSavedBooks: function () {
    return axios.get("/api/savedBooks");
  },
  saveBook: function (bookData) {
    return axios.post("/api/savedBooks", bookData);
  },
  deleteSavedBook: function (googleId) {
    return axios.delete(`/api/savedBooks/${googleId}`);
  }
};