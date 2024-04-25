function hasTargetSum(array, target) {
// Write your algorithm here

  const seenNumbers = {};

  for (const number of array) {
    const complement = target - number;

    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }
  return false;
}


/*
  Write the Big O time complexity of your function here
*/
// Runtime: O(n^2)
// function hasTargetSum(array, target) {
//  for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === complement) return true;



/*
  Add your pseudocode here
*/
// create an empty set called seenNumbers

// for each number in the array:
//     calculate the complement = target - number

//     if complement is in seenNumbers:
//         return true
//     else:
//         add the number to seenNumbers

// return false


/*
  Add written explanation of your solution here
*/
// Go through each number in the array.
// For each number, check if its complement is in the set.
// Add each number to the set as we check.
// If we find a complement, return true.
// If we check all numbers without finding a match, return false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
