import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";

class Saved extends Component {

  state = {
    savedBooks: [],
    screenWidth: window.innerWidth
  }

  componentDidMount() {
    this.loadSavedBooks();
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({screenWidth: window.innerWidth}, () => console.log(this.state.screenWidth))
  }

  loadSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({ savedBooks: res.data }))
  }

  deleteSavedBook = (event, googleId) => {
    event.preventDefault();
    API.deleteSavedBook(googleId)
      .then(res => this.loadSavedBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <div className="col rounded text-center bg-dark text-white mt-4 mb-4 p-4">
            <h1>Saved Library</h1>
          </div>
        </Row>
        <Row>
          <div className="col border border-rounded p-3 mb-4" >
            <h4>Saved Books</h4>
            {!this.state.savedBooks.length ? (
              <h6 className="text-center">No books to currently display!</h6>
            ) : (
                <BookList>
                  {this.state.savedBooks.map(book => {
                    return (
                      <BookListItem
                        key={book.googleId}
                        googleId={book.googleId}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        thumbnail={book.thumbnail}
                        href={book.href}
                        pageCount={book.pageCount}
                        date={API.getDate(book._id)}
                        saved={true}
                        clickEvent={this.deleteSavedBook}
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

export default Saved;