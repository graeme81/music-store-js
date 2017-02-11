var assert = require('assert');
var Customer = require('../customer');
var Record = require('../record');

describe('Customer', function(){

  var rod;
  var record1, record2;

  beforeEach("Setup", function(){
    
    record1 = new Record("Trews", "Den of Thieves", 12);
    record2 = new Record("Maroon 5", "Songs About Jane", 11);
    rod = new Customer(100, [record1,record2]);
  });

  it('should have cash', function(){
    assert.equal(100, rod.cash);
  });

  it('should have a Collection', function(){
    assert.equal(record1,rod.collection[0]);
    assert.equal(2, rod.collection.length);
  
  });


});


