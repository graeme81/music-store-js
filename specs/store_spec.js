var assert = require('assert');
var Store = require('../store');
var Record = require('../record');

describe('Store', function(){

var store;
var record1, record2;

  beforeEach('Setup', function(){
    record1 = new Record("Trews", "Den of Thieves", 12);
    record2 = new Record("Maroon 5", "Songs About Jane", 11);
    store = new Store("Ronnies Records","Edinburgh", [record1, record2], 1200);
  });

  

  it('should have a name', function(){
    assert.equal('Ronnies Records', store.name);
  });

  it('should have a city', function(){
    assert.equal('Edinburgh', store.city);
  });

  it('should have Inventory', function(){
    assert.equal(record1,store.inventory[0]);
    assert.equal(2,store.inventory.length);
  });

  it('should have a store balance', function(){
    assert.equal(1200, store.balance);
  });

  it('can LIST the inventory', function(){
    assert.equal("Trews - Den of Thieves, Maroon 5 - Songs About Jane, ",store.list());
  });

  it('Should be able to make a sale', function(){
    assert.equal(1211,store.sale(record2));
  });

  it('Should be able to give financial report', function(){
    assert.equal("The Store Balance is £1200. The Inventory is worth £23. Total worth of Ronnies Records is:£1223",store.finances());
  });

  it('Should be able to add records to Inventory', function(){
    assert.equal(3,store.add(record2));
  });


}); 