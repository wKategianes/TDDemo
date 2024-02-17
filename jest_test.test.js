const {sum} = require('./demo_functions.js');

test('name of your test', () => {
    expect(sum(1,2)).toBe(3)
})

test('name of second test', function () {
    expect(sum(4,1)).toBe(5)
})

test('name of failed test', function () {
    expect(sum(3,1)).toBe(5)
})

// Unit test - black box testing: running it in isolation