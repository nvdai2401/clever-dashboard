const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('server/db/db.json')
const db = low(adapter)

const createRoomModel = require('./room')
const createPatientModel = require('./patient')

module.exports = {
	models: {
		Room: createRoomModel(db),
		Patient: createPatientModel(db),
	},
	db,
}
