import { gql } from "apollo-boost"

const getBookQuery = gql`
  {
    books{
      name
      id
    }
  }
`
const getAuthorsQuery = gql`
  {
    authors{
      name
      id
    }
  }
`

const addBookMutation = gql`
mutation {
    addBook(name: "", genre: "", authoId: "") {
        name
        id
    }
}
`
export { getBookQuery, getAuthorsQuery, addBookMutation }