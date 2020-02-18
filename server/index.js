const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const { models, db } = require('./db/index')

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context() {
		const patients = db.get('patients').value()
		return { models, db, patients }
	},
})

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`)
})
