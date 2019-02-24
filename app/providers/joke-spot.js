/*
 * Dependencies
 */
const axios = require('axios');
const JOKE_SPOT_URL = 'https://official-joke-api.appspot.com/random_joke';

/*
 * Public Members
 */
function fetchJoke() {
	return new Promise((resolve, reject) => {
		axios.get(JOKE_SPOT_URL)
		 .then((payload) => {
			const result = {
				msg: payload.data
			}
			resolve(result);
		 })
		 .catch((err) => {
			reject(err);
		 });
	});
}

function ping() {
	return new Promise((resolve, reject) => {
		resolve({ data: 'pong' });
	});
}
 
 module.exports = {
	fetchJoke,
	ping	
 }
