// I: array of stock price
// O: the best profit
// C: try linear
// E: - negative profits
//    - zero profits
//    - number of prices are less than 2

// note: must buy before sell

var errMessages = 'the number of stock prices should be at least 2';
var getMaxProfit = function(stockPricesYesterday) {
  if (stockPricesYesterday.length < 2) {
    throw Error(errMessages);
  }

  var minPrice = Number.MAX_SAFE_INTEGER;
  var maxProfit = Number.MIN_SAFE_INTEGER;

  for (var i = 0; i <= stockPricesYesterday.length - 1; i++) {
    var currentPrice = stockPricesYesterday[i];
    var currentProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, currentProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
};

module.exports = { getMaxProfit, errMessages };
