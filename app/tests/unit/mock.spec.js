const assert = require('assert');
const sinon = require('sinon');
const supertest = require('supertest');
const server = require('../../../index');
const mockCtrl = require('../../../app/controllers/mockController');

describe('doStuff()', () => {
  reqStub = {};
  resStub = { send: sinon.stub() };
  nextStub = sinon.stub();

  // beforeEach(function() {

  // });

  // it.only('should start ok', (done) => {
  //   console.log(mockCtrl.justDoIt());
  //   done();
  // });
});

describe('Restify Demo Server', () => {

 describe('GET /mock', () => {
  it('responds with an array', (done) => {
   supertest(server)
    .get('/mock')
    .expect(200, done);
  });
 });

});
