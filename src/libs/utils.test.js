import { getRandomNumber } from './utils';

test('Generate a valid random number', () => {
  expect([ 1, 2, 3, 4]).toContain(getRandomNumber(1, 4));
});

test('Generate a valid random number with swapped parameters', () => {
  expect([ 1, 2, 3, 4]).toContain(getRandomNumber(4, 1));
});
