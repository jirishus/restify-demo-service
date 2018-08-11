var assert = require('assert');

var app = function() {
 return {};
}

describe('sample suite', () => {
 
 describe('sample suite validation', () => {
  it('should return an object', (done) => {
   assert(app(), {});
   done();
  });
 });

});