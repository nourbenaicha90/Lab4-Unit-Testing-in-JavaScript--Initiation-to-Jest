// myColor.test.js

const { myColor, printMyColor } = require('./EX2Q3.JS');

// Mock console.log
console.log = jest.fn();

test('prints myColor using console.log', () => {
    // Act
    printMyColor();

    // Assert
    expect(console.log.mock.calls[0][0]).toBe(myColor.toString());
    expect(console.log.mock.calls[1][0]).toBe(myColor.join());
    expect(console.log.mock.calls[2][0]).toBe(myColor.join(''));
});

// Clean up the mock after each test
afterEach(() => {
    console.log.mockRestore();
});
