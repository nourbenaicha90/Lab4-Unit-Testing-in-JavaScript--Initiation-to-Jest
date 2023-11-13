const exf = require('./exf.js'); // Adjust the path accordingly

test('exf prints "echo" 5 times', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    exf("echo", 5);
    expect(spy).toHaveBeenCalledTimes(5);
    spy.mockRestore();
});

test('exf prints "JS from server" 10 times', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    exf("JS from server", 10);
    expect(spy).toHaveBeenCalledTimes(10);
    spy.mockRestore();
});
   