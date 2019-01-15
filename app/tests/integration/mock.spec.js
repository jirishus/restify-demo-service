const assert = require('assert');
const supertest = require('supertest');
const server = require('../../../index');

describe('GET /', () => {
 it('should return a 200', (done) => {
	supertest(server)
	.get('/')
	.set('Accept', 'application/json')
	.expect(200, done)
 });

 it('should return a string response', (done) => {
 supertest(server)
	.get('/')
	.set('Accept', 'application/json')
	.then((apiResponse) => {
		assert.equal(apiResponse.body, 'ok');
		done();
	});
 });
});

