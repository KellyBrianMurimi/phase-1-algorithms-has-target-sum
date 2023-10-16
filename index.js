function hasTargetSum(array, target) {
  //Write your algorithm here
  const seenNumbers = {};

  for (let num of array) {
    const complement = target - num;
    if (seenNumbers[complement]) {
      return true;
    }
    seenNumbers[num] = true;
  }

  return false;
}

/* 
  Big O time complexity: O(n) where n is the length of the array.
*/

/* 
  Pseudocode:
  1. Initialize an empty object called `seenNumbers` to keep track of seen numbers.
  2. Loop through the elements in the `array`.
  3. For each element, calculate its complement (the difference between the `target` and the current element).
  4. Check if the complement exists in the `seenNumbers` object. If it does, return true as a pair of numbers with the sum equal to the target exists.
  5. If the complement doesn't exist in the `seenNumbers` object, add the current element to the `seenNumbers` object.
  6. If no pairs are found after looping through the array, return false.

/* 
  Written Explanation:
  This function uses a (object) to efficiently keep track of numbers seen in the array. It iterates through the array, calculates the complement of each element (the value needed to reach the target), and checks if this complement has been seen before. If the complement is found in the `seenNumbers` object, it means there are two numbers in the array that sum up to the target, so it returns true. If the loop completes without finding a pair, it returns false, indicating that no such pair exists in the array.
*/

// You can run `node index.js` to test this function with the provided examples.
if (require.main === module) {
  //add your own custom tests in here
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

