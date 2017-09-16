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

  it('Should have image', function(){
    assert.strictEqual(term.image, "./client/build/images/object_vs_class.jpg",);
  })

  it('Should have tags', function(){
    assert.strictEqual(term.tags.length, 2);
  })

  it('Should have additional info', function(){
    assert.strictEqual(term.add_info, "Software objects are conceptually similar to real-world objects: An object's properties are what it knows and its methods are what it can do. they too consist of state and related behavior. An object stores its state in fields (variables in some programming languages) and exposes its behavior through methods (functions in some programming languages). Methods operate on an object's internal state and serve as the primary mechanism for object-to-object communication. Hiding internal state and requiring all interaction to be performed through an object's methods is known as data encapsulation — a fundamental principle of object-oriented programming.");
  })

  it('Should have webpages', function(){
    assert.strictEqual(term.webpages.length, 3);
  })



  
})