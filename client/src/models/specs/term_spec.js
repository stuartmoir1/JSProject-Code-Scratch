var assert = require('assert');
var Term = require('../term.js');

describe('Term', function(){
  
  var term;

  beforeEach(function(){
    term = new Term();
  })

  it('Should have name', function(){
    assert.strictEqual(term.name, "object");
  })




  
})