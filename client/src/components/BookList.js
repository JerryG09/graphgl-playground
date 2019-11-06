import React from 'react';
import { gql } from "apollo-boost"
import { graphql } from "react-apollo"

const getBookQuery = gql`
  {
    books{
      name
      id
    }
  }
`

function BookList(props) {
  // console.log(props)

  function displayBooks() {
    const data = props.data;

    if (data.loading) {
      return (
        <div className="">
          Loading Books
        </div>
      )
    }
    if (!data.loading) {
      return data.books.map(book => {
        return (
          <li key={book.id}>{book.name}</li>
        )
      })
    }
  }

  return (
    <div>
      <ul id ="book-list">
          {displayBooks()}
      </ul>
    </div>
  );
}

export default graphql(getBookQuery)(BookList);
