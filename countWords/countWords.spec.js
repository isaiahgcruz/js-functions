const countWords = require('./countWords');

const words = [
  {
    sentence: 'A quick brown fox jumps over the lazy dog',
    count: 9,
  },
  {
    sentence: 'A quick brown fox jumps over the lazy dog.',
    count: 9,
  },
  {
    sentence: 'A quick-witted brown fox jumps over the lazy dog.',
    count: 9,
  },
  {
    sentence: 'A quick brown, fox jumps over the lazy dog.',
    count: 9,
  },
  {
    sentence: 'A    quick     brown,     fox    jumps over the lazy dog.',
    count: 9,
  },
];

describe('functional', () => {
  words.forEach(({ sentence, count }) => {
    it(`'${sentence}' should be ${count}`, () => {
      expect(countWords(sentence)).toBe(count);
    });
  });
});
