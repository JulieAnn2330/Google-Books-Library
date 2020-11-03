import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import Button from "../components/Button";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";

class Search extends Component {

  state = {
    books: [],
    bookSearch: "",
    savedBooks: [],
    screenWidth: window.innerWidth,
    searched: ""
  };

  componentDidMount() {
    this.loadSavedBooks();
    window.addEventListener('resize', this.updateDimensions);
  }

  checkIfSaved = googleId => {
    for (let i in this.state.savedBooks) {
      if (this.state.savedBooks[i].googleId === googleId) return true;
    }
    return false;
  }

  checkSavedDate = googleId => {
    for (let i in this.state.savedBooks) {
      if (this.state.savedBooks[i].googleId === googleId) return API.getDate(this.state.savedBooks[i]._id);
    }
    return null;
  }

  updateDimensions = () => {
    this.setState({screenWidth: window.innerWidth});
  }

  loadSavedBooks = () => {
    API.getSavedBooks()
      .then(res => {
        this.setState({ savedBooks: res.data });
      })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      searched: this.state.bookSearch,
      bookSearch: ""
    });
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({ books: res.data }, () => console.log(res.data)))
      .catch(err => console.log(err));
  };

  deleteSavedBook = (event, googleId) => {
    event.preventDefault();
    API.deleteSavedBook(googleId)
      .then(res => this.loadSavedBooks())
      .catch(err => console.log(err));
  };

  handleSave = (event, googleId, title, authors, description, href, pageCount, thumbnail) => {
    event.preventDefault();
    API.saveBook({ googleId, title, authors, description, href, pageCount, thumbnail })
      .then(res => this.loadSavedBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <div className="col rounded text-center bg-lightgray">
            <h1 className="library">Google Books Library</h1>
            <h4 className="library">Find your next great read!</h4>
          </div>
        </Row>
        <Row>
          <div className="col rounded bg-lightgray mb-4 mt-4 p-4">
            <h4>Search for Books</h4>
            <form>
              <div className="form-group">
                <label htmlFor="bookSearch" className="searchTitle">Name of Book or Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="bookSearch"
                  name="bookSearch"
                  value={this.state.bookSearch}
                  onChange={this.handleInputChange} />
              </div>
              <Button onClick={this.handleFormSubmit}>Search for Books</Button>
            </form>
          </div>
        </Row>
        <Row>
          <div className="col border border-rounded p-3 mb-4">
            {this.state.searched === "" ? (
            <h4>Search Results</h4>
            ) : (
              <h4>Search Results for {this.state.searched}</h4>
            )}
            {!this.state.books.length ? (
              <h6 className="text-center">No books matched your search! Try again!</h6>
            ) : (
                <BookList>
                  {this.state.books.map(book => {
                    return (
                      <BookListItem
                        key={book.volumeInfo.infoLink}
                        googleId={book.id}
                        title={book.volumeInfo.title || "Title Not Found"}
                        authors={book.volumeInfo.authors || ["Author Not Found"]}
                        description={book.volumeInfo.description || "No description available"}
                        thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "img/placeholder.png"}
                        href={book.volumeInfo.infoLink}
                        pageCount={book.volumeInfo.pageCount}
                        saved={this.checkIfSaved(book.id)}
                        clickEvent={this.checkIfSaved(book.id)
                          ? this.deleteSavedBook
                          : this.handleSave}
                        date={this.checkSavedDate(book.id)}
                        screenWidth={this.state.screenWidth}
                      />
                    );
                  })}
                </BookList>
              )}
          </div>
        </Row>
      </Container>
    )
  }
}

export default Search;