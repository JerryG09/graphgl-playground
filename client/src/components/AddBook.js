import React, {useState} from 'react';
import { graphql } from "react-apollo"
import { getAuthorsQuery } from "../querries/querries"

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
    console.log(books)
  }  

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!books.authorId.length || !books.genre.length || !books.name.length) {
      return
    }

    // else {

    // }
    console.log()
  }

    function displayAuthors() {
      const data = props.data;
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
        <form onSubmit={handleSubmit}>
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


export default graphql(getAuthorsQuery)(AddBook);