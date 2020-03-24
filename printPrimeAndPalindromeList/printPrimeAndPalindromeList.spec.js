const printPrimeAndPalindromeList = require('./printPrimeAndPalindromeList');

const spyConsoleLog = jest.spyOn(console, 'log').mockImplementation();

it('should print all prime and palindrome from 1 to 150', () => {
  const answer = [2, 3, 5, 7, 11, 101, 131];

  printPrimeAndPalindromeList(150);

  answer.forEach((val, index) => {
    expect(spyConsoleLog).toHaveBeenNthCalledWith(index + 1, val);
  });
});
