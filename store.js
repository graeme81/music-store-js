var Store = function(name, city, inventory, balance){
  this.name = name;
  this.city = city;
  this.inventory = inventory;
  this.balance = balance;
}

Store.prototype = {
  list: function(){
    var albums = "";
    for (item of this.inventory){
      albums += item.artist + " - "+ item.title+", ";
    }
    return albums;
  },

  add: function(record){
    this.inventory.push(record);
    return this.inventory.length;
  },

  sale: function(record){
    for (var i=0; i<this.inventory.length; i++){
      if(this.inventory[i] === record){
        this.inventory.splice(i,1);
        sale = record.price;
        this.balance += sale;
      };
    };
  },

  finances: function(){
    var worth;
    var money = 0, total = 0;

    for(item of this.inventory){
      money += item.price;
    }
    total = money + this.balance;
    worth = "The Store Balance is £"+this.balance+". The Inventory is worth £"+money+ ". Total worth of "+this.name+" is:£" + total;

    return worth;
  },

};

module.exports = Store;