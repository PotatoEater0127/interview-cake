// I: array of integers
// O: highest product of three integers
// C: O(n)
// E: negative integers

const getHighestProductOf3 = (ints) => {
  let highestProductOf3 = ints[0] * ints[1] * ints[2];
  let highestProductOf2 = ints[0] * ints[1];
  let lowestProductOf2 = ints[0] * ints[1];
  let highest = Math.max(ints[0], ints[1]);
  let lowest = Math.min(ints[0], ints[1]);

  for (let i = 2; i <= ints.length - 1; i += 1) {
    const curInt = ints[i];
    highestProductOf3 = Math.max(highestProductOf3, curInt * highestProductOf2, curInt * lowestProductOf2);
    highestProductOf2 = Math.max(highestProductOf2, curInt * highest, curInt * lowest);
    lowestProductOf2 = Math.min(lowestProductOf2, curInt * highest, curInt * lowest);
    highest = Math.max(highest, curInt);
    lowest = Math.min(lowest, curInt);
    console.log(highestProductOf3, highestProductOf2, lowestProductOf2, highest, lowest);
  }

  return highestProductOf3;
};

module.exports = getHighestProductOf3;
