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
    jane = new Customer(5,[record1,record1,record1,record2]);
  });

  it('should have cash', function(){
    assert.equal(100, rod.cash);
  });

  it('should have a Collection', function(){
    assert.equal(record1,rod.collection[0]);
    assert.equal(2, rod.collection.length);
  });

  it('should alter cash when buying a record',function(){
    rod.buy(record1);
    assert.equal(88, rod.cash);
  });

  it('should increase collection when buying a record',function(){
    rod.buy(record1);
    assert.equal(3,rod.collection.length);
  });

  it('should alter cash when selling a record',function(){
    rod.sell(record1);
    assert.equal(112, rod.cash);
  });

  it('should decrease collection when selling a record',function(){
    rod.sell(record1);
    assert.equal(1,rod.collection.length);
  });

  it('cannot buy record if they do not have enough cash', function(){
    assert.equal('I dont have enough money for this record.',jane.buy(record2));
  });


});


