import sum from './sum.js';

describe('Sum Function', () => {
  test('Sum of a and  b equals 2', () => {
    // Assign
    const a = 1;
    const b = 1;

    // Act
    const c = sum(a, b);

    // Assert
    expect(c).toBe(2);
  });
});