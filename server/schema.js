const { gql } = require('apollo-server')

const typeDefs = gql`
	type Patient {
		id: ID!
		name: String!
		age: Int!
		start_at: String!
		desc: String!
		room: Room!
	}

	type Room {
		id: ID!
		name: String!
		patient: [Patient]!
	}

	# input NewRoomInput {
	# 	id: ID!
	# 	name: String!
	# 	patient: [Patient]!
	# }

	# input NewPatientInput {
	# 	name: String!
	# 	age: Int!
	# 	start_at: String!
	# 	desc: String!
	# 	room: NewRoomInput!
	# }

	type Query {
		patients: [Patient]!
	}
`

module.exports = typeDefs
