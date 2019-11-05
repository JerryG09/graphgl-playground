const graphql = require('graphql')
const _ = require('lodash')

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLID,
    GraphQLInt } = graphql

// fake db
const books = [
    {name: "Great mind", genre: "Moltivativational", id: "1"},
    {name: "High mind", genre: "Sci-fi", id: "2"},
    {name: "Lovely mind", genre: "Fantasy", id: "3"}
]

// fake authors
const authors = [
    {name: "Peter Anichebe", age: 54, id: "1"},
    {name: "Ryo Anichebe", age: 34, id: "2"},
    {name: "Flyod Anichebe", age: 44, id: "3"},
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                // Code to get data from db/ other source
               return _.find(books, {id: args.id})
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parents, args) {
                // Code to get data from db/ other source
                return _.find(authors, {id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})