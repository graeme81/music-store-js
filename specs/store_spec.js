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

  it('should have a City', function(){
    assert.equal('Edinburgh', store.city);
  });

  it('should have Inventory', function(){
    assert.equal(record1,store.inventory[0]);
    assert.equal(2,store.inventory.length);
  });

  it('should have a store balance', function(){
    assert.equal(1200, store.balance);
  });

  it('can list the inventory', function(){
    assert.equal("Trews - Den of Thieves, Maroon 5 - Songs About Jane, ",store.list());
  });

  it('can add records to Inventory', function(){
    assert.equal(3,store.add(record2));
  });

  it('can make a sale', function(){
    store.sale(record2);
    assert.equal(1211,store.balance);
    assert.equal(1,store.inventory.length);
  });

  it('can give financial report', function(){
    assert.equal("The Store Balance is £1200. The Inventory is worth £23. Total worth of Ronnies Records is:£1223",store.finances());
  });


}); 