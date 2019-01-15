/*
 * Dependencies
 */
const jokeSpot = require('../providers/joke-spot');

/*
 * Public Members
 */
function fetchRandomJoke(req, res, next) {
 jokeSpot.fetchJoke()
  .then((payload) => {
		res.send(payload);
		next();
	})
	.catch((err) => {
		res.send(err);
		next();
	});
}

module.exports = {
 fetchRandomJoke	
}