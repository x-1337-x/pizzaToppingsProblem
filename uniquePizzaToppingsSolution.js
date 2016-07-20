function getPopularSets(orders, limit, quantity, strict){

  var ranks = {};

  if (typeof limit === 'undefined') limit = 20;
  if (typeof quantity === 'undefined') quantity = 1;
  if (typeof strict === 'undefined') strict = false;

  orders.forEach(function(order) {

    if (strict ? order.toppings.length === quantity 
      : order.toppings.length >= quantity) {
      var key = order.toppings.sort().join(', ');

      if (typeof ranks[key] === 'undefined') ranks[key] = 0;

      ranks[key]++;
    }
    
  })

  var result = Object.keys(ranks)
    .map(function(key) {
      return {toppings: key, count: ranks[key]}
    })
    .sort(function(a, b) {
      return b.count - a.count;
    })
    .slice(0, limit)
    .map(function(item) {
      return item.toppings
    });

  return result;
}