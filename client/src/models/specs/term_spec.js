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

  it('Should have description', function(){
    assert.strictEqual(term.description, "");
  })

  it('Should have keywords', function(){
    assert.strictEqual(term.keywords.length, 2 );
  })


  
})