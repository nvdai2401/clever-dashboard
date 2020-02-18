const resolvers = {
	Query: {
		patients(_, __, { patients }) {
			console.log(patients)
			return patients
		},
	},
}

module.exports = resolvers
