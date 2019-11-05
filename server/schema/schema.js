const graphql = require('graphql')
const _ = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

// fake db
const books = [
    {name: "Great mind", genre: "Moltivativational", id: "1"},
    {name: "High mind", genre: "Sci-fi", id: "2"},
    {name: "Lovely mind", genre: "Fantasy", id: "3"}
]
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                // Code to get data from db/ other source
               return _.find(books, {id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})