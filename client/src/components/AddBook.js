import React from 'react';
import { graphql } from "react-apollo"
import { getAuthorsQuery } from "../querries/querries"

function AddBook(props) {
    // console.log(props)
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
        <form id="add-book">
          <div className="field">
            <label htmlFor="">Book name:</label>
            <input type="text"/>
          </div>

          <div className="field">
            <label htmlFor="">Genre:</label>
            <input type="text"/>
          </div>

          <div className="field">
            <label htmlFor="">Author:</label>
            <select name="" id="">
              <option value="">Select Author</option>
              {displayAuthors()}
            </select>
          </div>

          <button>+</button>
        </form>
      </div>
    );
  }


export default graphql(getAuthorsQuery)(AddBook);