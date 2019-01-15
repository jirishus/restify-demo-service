const assert = require('assert');
const jokeSpot = require('../../providers/joke-spot');
const nock = require('nock');

nock('https://official-joke-api.appspot.com')
 .get('/random_joke')
 .reply(200, { punchline: 'something funny' });

describe('Main Canary Test Suite', () => {

	it('should return a 200', (done) => {
		jokeSpot.fetchJoke()
			.then((payload) => {
				done();
			})
			.catch((err) => {
				console.log(new Error(err));
			});
	});

	it('should do something amazing', (done) => {
		done();
	});

});

