const first = require('./EX2Q1.js'); // Assuming this is the correct path to your implementation file

test('returns an empty array if the input array is'+
+' null or n is less than or equal to 0', () => {
    // Arrange and Act
    const result1 = first(null, 5);
    const result2 = first([1, 2, 3], 0);

    // Assert
    expect(result1).toEqual([]);
    expect(result2).toEqual([]);
});
