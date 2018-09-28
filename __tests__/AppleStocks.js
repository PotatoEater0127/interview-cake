var { getMaxProfit, errMessages } = require('../AppleStocks');
var prices1 = [10, 7, 5, 8, 11, 9];
var prices2 = [10, 8, 7, 5, 3, 1];
var prices3 = [1];
var prices4 = [];
test('should return 6', () => {
  expect(getMaxProfit(prices1)).toBe(6);
});
test('should return -1', () => {
  expect(getMaxProfit(prices2)).toBe(-1);
});
test('should return an error', () => {
  expect(() => { getMaxProfit(prices3) }).toThrowError(errMessages);
  expect(() => { getMaxProfit(prices4) }).toThrowError(errMessages);
});