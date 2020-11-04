import React from "react";
import { Col, Row } from "../Grid";

export function BookList({ children }) {
  return (
    <ul className="list-group">{children}</ul>
  );
};

export function BookListItem({
  googleId,
  title,
  authors,
  description,
  href,
  pageCount,
  thumbnail,
  clickEvent,
  saved
}) {
  console.log(saved);
  return (
    <li className="list-group-item m-2">

        <div className="float-right">
          {!saved ? (
            <button
              className="btn btn-success"
              onClick={event => clickEvent(event, googleId, title, authors, description, href, pageCount, thumbnail)}>Save to Library</button>
          ) : (
              <button className="btn btn-danger" onClick={event => clickEvent(event, googleId)}>Remove from Library</button>
            )
          }
          <a className="btn btn-primary ml-2 mr-2" href={href} target="_blank" rel="noopener noreferrer">View Book Info</a>
        </div>

      <h4 className="font-weight-bold">{title}</h4>
      <h5>by {authors.length > 1 ? (authors.reduce((prev, curr) => [prev, ", ", curr])) : authors[0]}</h5>
      <Row>
        <div className="col-sm-12 col-md-auto text-center">
          <img src={thumbnail} alt={title} className="mt-1 mb-2" />
        </div>
        <Col>
          <p >{description}</p>
        </Col>
      </Row>

      {saved &&
        <div className="row">
          <Col>
          <small className="text-right">{pageCount} pages</small>
          </Col>
        </div>
      }

    </li>
  );
};