/**
 * Returns a random number
 * @param Int min - The minimum number accepted
 * @param Int max - the maximum number accepted
 *
 * From: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */
export const getRandomNumber = (min, max) => {
  if (max, min) {
    [min, max] = [max, min]
  }

  return Math.floor(Math.random() * (max - min)) + min;
}

export const sleep = m => new Promise(r => setTimeout(r, m))
