// I: array of integers
// O: product of nums except for the one on the current index
// C: 1.no division 2.O(n)
// E: 1.empty 2.array of same nums 3. array has fewer than two integers
const errMessage = 'numbers should be more than one';
const getProductsOfAllIntsExceptAtIndex = function(nums) {

  if (nums.length < 2) {
    throw new Error(errMessage);
  }
  
  // calculate products of nums before each index - productsBeforeIndex
  const productsBeforeIndex = [];
  let productSoFar = 1;
  for (let i = 0; i <= nums.length - 1; i++) {
    productsBeforeIndex[i] = productSoFar;
    productSoFar *= nums[i];
  }
  
  // calculate products of nums after each index - productsAfterIndex
  var productsAfterIndex = [];
  productSoFar = 1
  for (let j = nums.length - 1; j >= 0; j--) {
    productsAfterIndex[j] = productSoFar;
    productSoFar *= nums[j];
  }
  
  // multiply each num pair of productsBeforeIndex and productsAfterIndex
  var productsOfAllIntsExceptAtIndex = [];
  for (let k = 0; k <= nums.length - 1; k++) {
    productsOfAllIntsExceptAtIndex[k] = productsBeforeIndex[k] * productsAfterIndex[k];
  }

  return productsOfAllIntsExceptAtIndex;
} 

module.exports = { getProductsOfAllIntsExceptAtIndex, errMessage };
