const last = require('./EX2Q2.js'); // Assuming this is the correct path to your implementation file

test('returns the last 2 elements of the array', () => {
    // Arrange and Act
    const result = last([1, 2, 3, 4, 5], 2);

    // Assert
    expect(result).toEqual([4, 5]);
});

