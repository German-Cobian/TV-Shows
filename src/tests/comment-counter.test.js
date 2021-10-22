import countComments from '../comment-counter.js';

describe('countComments function', () => {
  test('Comments are counted correctly', () => {
    // Assign
    const testArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

    // Act
    const testCount = countComments(testArray);

    // Assert
    expect(testCount).toBe(4);
  });
  test('There are no comments', () => {
    // Assign
    const testArray = [];

    // Act
    const testCount = countComments(testArray);

    // Assert
    expect(testCount).toBe(0);
  });
});