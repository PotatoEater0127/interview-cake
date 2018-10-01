const getHighestProductOf3 = require('../HighestProductOfThree');

const ints1 = [2, 7, -10, 9];
const product1 = 126;
const ints2 = [7, 3, -5, 9, -10, 20, -30];
const product2 = 6000;
const ints3 = [-2, -5, -9, -10, -7];
const product3 = -70;

test.each([[ints1, product1], [ints2, product2], [ints3, product3]])(
  'should return %i',
  (ints, product) => {
    expect(getHighestProductOf3(ints)).toEqual(product);
  },
);
