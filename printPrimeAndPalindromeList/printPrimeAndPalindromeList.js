/**
 * Prints out all numbers that are both prime and palindromic
 * from 1 to `input`
 *
 * @param {number} input
 */
const printPrimeAndPalindromeList = (input) => {
  for (let i = 2; i < input; i += 1) {
    const str = `${i}`;

    const isPalindrome = (() => {
      if (str.length > 1) {
        for (let j = 0; j < Math.floor(str.length / 2); j += 1) {
          if (str[j] !== str[str.length - j - 1]) {
            return false;
          }
        }
      }

      return true;
    })();
    // Or just this for readabilty and no IIFE but slower
    // const isPalindrome = str.split('').reverse().join('') === str;

    if (isPalindrome) {
      const isPrime = (() => {
        // To reduce complexity
        const length = Math.floor(Math.sqrt(i)) + 1;

        for (let j = 2; j < length; j += 1) {
          if (i % j === 0) {
            return false;
          }
        }

        return i > 1;
      })();

      if (isPrime) {
        console.log(i);
      }
    }
  }
};

module.exports = printPrimeAndPalindromeList;
