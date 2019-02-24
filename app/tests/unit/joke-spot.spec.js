const assert = require('assert');
const jokeSpot = require('../../providers/joke-spot');
const nock = require('nock');

const chai = require('chai');
const expect = chai.expect;

nock('https://official-joke-api.appspot.com')
 .get('/random_joke')
 .reply(200, { punchline: 'something funny' });

describe('Main Canary Test Suite', () => {

	it('should return a 200', (done) => {
		jokeSpot.fetchJoke()
			.then((payload) => {
				expect(payload.msg.punchline).to.equal('something funny');
				done();
			})
			.catch((err) => {
				console.log(new Error(err));
			});
	});
});

