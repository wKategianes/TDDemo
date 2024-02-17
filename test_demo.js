const { sum } = require("./demo_functions.js");

function expect(value1, value2) {
    if (value1 === value2) {
        return `Test Passed ${value1} is equal ${value2}`
    } else {
        return `Test Failed ${value1} is not equal ${value2}`
    }
}

function expectFalse(value1, value2) {
    if (value1 !== value2) {
        return `Test Passed ${value1} is not equal ${value2}`
    } else {
        return `Test Failed ${value1} is equal ${value2}`
    }
}

// console.log(expect(sum(3,1), 4))

// console.log(expectFalse(3,2))