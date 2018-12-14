const assert = require('assert');
const sinon = require('sinon');
const supertest = require('supertest');
const server = require('../../index');
const mockCtrl = require('../../app/controllers/mockController');

describe('doStuff()', () => {
  reqStub = {};
  resStub = { send: sinon.stub() };
  nextStub = sinon.stub();

  // beforeEach(function() {

  // });

  it.only('should start ok', (done) => {
    console.log(mockCtrl.justDoIt());
    done();
  });
});

describe('GET /posts', () => {
 it('should return a 200', (done) => {
  supertest(server)
   .get('/posts')
   .expect(200, done);
 });
});

describe('Restify Demo Server', () => {

 describe('GET /users', () => {
  it('responds with an array', (done) => {
   supertest(server)
    .get('/users')
    .expect(200, done);
  });

 });

 describe('GET /mock', () => {
  it('responds with an array', (done) => {
   supertest(server)
    .get('/mock')
    .expect(200, done);
  });
 });

});

describe('GET /', () => {
 it.skip('pending requirement', (done) => {
 supertest(server)
 .get('/')
 .set('Accept', 'application/json')
 .expect(200, done)
 });

 it.skip('pending requirement', (done) => {
 supertest(server)
 .get('/')
 .set('Accept', 'application/json')
 .then((apiResponse) => {
  assert.equal(apiResponse.body, 'ok');
  done();
 });
 });
});

