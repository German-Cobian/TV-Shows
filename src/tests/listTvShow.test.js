/**
 * @jest-environment jsdom
 */

import { likeCounter } from '../listTvShow.js';

describe('likeCounter function', () => {
  test('likes are counted correctly', () => {
    // Assign
    const testArray = [{ likes: 4 }];

    // Act
    const testCount = likeCounter(testArray);

    // Assert
    expect(testCount).toBe(4);
  });

  test('There are no likes and the number of likes is counted as 0', () => {
    // Assign
    const testArray = [{ likes: 0 }];

    // Act
    const testCount = likeCounter(testArray);

    // Assert
    expect(testCount).toBe(0);
  });
});
