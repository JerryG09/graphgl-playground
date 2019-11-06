const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// allow cross-origin request
app.use(cors())


// connection to mongo atlas
mongoose
	.connect('mongodb://localhost/graphql-tutorial')
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err))

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true
}))

app.listen(4000, () => {
    console.log("now listening for request on port 4000")
})