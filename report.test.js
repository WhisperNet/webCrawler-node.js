const { sort } = require("./report");
const { test, expect } = require("@jest/globals");


test('report sort', () => {
    const input = {
        'facebook.com/settings': 1,
        'facebook.com/allactivity': 10
    }
    const actual = sort(input)
    const expected = [
        ['facebook.com/allactivity', 10],
        ['facebook.com/settings', 1]
    ]
    expect(actual).toEqual(expected)
})