var Customer  =function(cash, collection){
  this.cash = cash;
  this.collection = collection;
}

Customer.prototype = {
  buy: function(record){
    if (this.cash >= record.price){
      this.collection.push(record);
      this.cash -= record.price;
    }else{
      return 'I dont have enough money for this record.';
    };
  },

  sell: function(record){
    for(var i = 0; i<this.collection.length; i++){
      if (this.collection[i].title === record.title){
        this.collection.splice(i,1);
        this.cash += record.price;
      };
    };
  },


};

module.exports = Customer;
