var assert = require('assert');
var Record = require('../record');

describe('Record',function(){

  var record;

    beforeEach("Setup", function() {
      record = new Record("The Trews", "Den of Thieves", 12);
    });

  it('should have an artist', function(){
    assert.equal('The Trews',record.artist);
  });

  it('should have a title', function(){
    assert.equal('Den of Thieves',record.title);
  });

  it('should have a price', function(){
    assert.equal(12,record.price);
  });
})