import React, {useState} from 'react';
import { graphql } from "react-apollo";
import * as compose from 'lodash.flowright';
import { getAuthorsQuery, addBookMutation } from "../querries/querries"

function AddBook(props) {
  const initialBook = {
    name: "",
    genre: "",
    authorId: ""
  }

  const [books, setBooks] = useState(initialBook)

  const handleChange = (e) => {
    e.preventDefault()
    const value = e.target.value;
    const name = e.target.name
    setBooks({...books, [name]: value})
  }  

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!books.authorId.length || !books.genre.length || !books.name.length) {
      return window.alert("Fill required fields")
    }

    // else {

    // }
    console.log(books)
  }

    function displayAuthors() {
      console.log(props)
      const data = props.getAuthorsQuery;
      if (data.loading) {
        return (<option disabled>Loading Authors...</option>);
      }

      else {
        return data.authors.map(author => {
          return (<option key={author.id} value={author.id}>{author.name}</option>)
        })
      }
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit} id="add-book">
          <div className="field">
            <label htmlFor="">Book name:</label>
            <input 
              type="text" 
              onChange={handleChange}
              name="name"
              value={books.name}
            />
          </div>

          <div className="field">
            <label htmlFor="">Genre:</label>
            <input 
              type="text" 
              onChange={handleChange}
              name="genre"
              value={books.genre}
            />
          </div>

          <div className="field">
            <label htmlFor="">Author:</label>
            <select 
              type="text" 
              onChange={handleChange}
              name="authorId"
              value={books.authorId}
            >
              <option name="">Select Author</option>
              {displayAuthors()}
            </select>
          </div>

          <button>+</button>
        </form>
      </div>
    );
  }


export default compose(
  graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
  graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);