/**
 * Counts the number of words
 *
 * @param {string} string
 * @return {number} number of words
 */
const countWords = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('expects a string');
  }

  return string.split(/\s+/).length;
};

module.exports = countWords;
