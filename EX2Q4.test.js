// chunk.test.js

const chunk = require('./EX2Q4.JS');

test('chunks an array into specified size', () => {
    // Arrange
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const chunkSize = 3;

    // Act
    const result = chunk(inputArray, chunkSize);

    // Assert
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
});

test('handles empty array', () => {
    // Arrange
    const inputArray = [];
    const chunkSize = 3;

    // Act
    const result = chunk(inputArray, chunkSize);

    // Assert
    expect(result).toEqual([]);
});

