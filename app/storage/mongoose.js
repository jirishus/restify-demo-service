const mongoose = require('mongoose');
const config = require('../../config.json');

// Create a pending connection
const DB_CONNECTION = `${ config.mongo.host }/${ config.mongo.collection }`;
mongoose.connect(DB_CONNECTION, { useNewUrlParser: true });

function mongoConnect() {
	return new Promise((resolve, reject) => {
		const db = mongoose.connection;
		// Check connection status
		db.on('error', (err) => {
			reject(err);
		});

		db.once('open', () => {
			console.log('MongoDB Connection Successful');
			resolve('MongoDB Connection Response')
		});
	});
}

module.exports = {
	mongoConnect
}