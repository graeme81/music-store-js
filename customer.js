var Customer  =function(cash, collection){
  this.cash = cash;
  this.collection = collection;
}

Customer.prototype = {
  buy: function(){
    console.log("for buying");
  },

  sell: function(){
    console.log("for Selling")
  },
}

module.exports = Customer;
