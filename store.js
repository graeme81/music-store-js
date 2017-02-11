var Store = function(name, city, inventory, balance){
  this.name = name;
  this.city = city;
  this.inventory = inventory;
  this.balance = balance;
}

Store.prototype ={
  list: function(array){
    var albums = "";
    for (item of array){
      albums += item.artist + " - "+ item.title+", ";
    }
    return albums;
  },

  add: function(record, array){
    array.push(record);
    return array.length;
  },

  sale: function(record, store){
    sale = record.price;
    store.balance += sale;
    return store.balance;
  },

  finances: function(store){
    var worth;
    var money = 0;
    var total = 0;
    for(item of store.inventory){
      money += item.price;
    }
    total = money + store.balance;
    worth = "The Store Balance is £"+store.balance+". The Inventory is worth £"+money+ ". Total worth of "+store.name+" is:£" + total;

    return worth;
  }

};

module.exports = Store;