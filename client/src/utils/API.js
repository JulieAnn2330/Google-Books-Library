import axios from "axios";
import moment from "moment";


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
  },
  getDate: function (id) {
    let timestamp = id.toString().substring(0, 8)
    let date = new Date(parseInt(timestamp, 16) * 1000)
    return (moment(date).format("MMM D, YYYY @ h:mma"));
  }
};