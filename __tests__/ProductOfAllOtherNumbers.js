const { getProductsOfAllIntsExceptAtIndex, errMessage } = require('../ProductOfAllOtherNumbers');

const nums = [1, 7, 3, 4];
const nums2 = [2, 2, 2, 2];
const nums3 = [2];
const nums4 = [];

test('should return [84, 12, 28, 21]', () => {
  expect(getProductsOfAllIntsExceptAtIndex(nums)).toEqual([84, 12, 28, 21]);
});

test('should return [8, 8 , 8, 8]', () => {
  expect(getProductsOfAllIntsExceptAtIndex(nums2)).toEqual([8, 8 , 8, 8]);
});

test('should throw an error', () => {
  expect(() => getProductsOfAllIntsExceptAtIndex(nums3)).toThrow(errMessage);
  expect(() => getProductsOfAllIntsExceptAtIndex(nums4)).toThrow(errMessage);
});

