const { normalizeUrl, getUrlFromHtml } = require("./crawler");
const { test, expect } = require("@jest/globals");


test('normalizeUrl strip protocol', () => {
    const input = 'https://example.com/home'
    const actual = normalizeUrl(input)
    const expected = 'example.com/home'
    expect(actual).toEqual(expected)
})

test('normalizeUrl capitalize', () => {
    const input = 'https://EXAMPLE.com/home'
    const actual = normalizeUrl(input)
    const expected = 'example.com/home'
    expect(actual).toEqual(expected)
})

test('normalizeUrl tailing /', () => {
    const input = 'https://example.com/home/'
    const actual = normalizeUrl(input)
    const expected = 'example.com/home'
    expect(actual).toEqual(expected)
})

test('getUrlFromHtml absolute', () => {
    const htmlBody = `
    <html>
        <body>
            <a href="https://whispernet.github.io/path">
                A Link
            </a>
        </body>
    </html>
    `
    const baseUrl = 'https://whispernet.github.io'
    const actual = getUrlFromHtml(htmlBody, baseUrl)
    const expected = ["https://whispernet.github.io/path"]
    expect(actual).toEqual(expected)
})

test('getUrlFromHtml relative', () => {
    const htmlBody = `
    <html>
        <body>
            <a href="/path">
                A Link
            </a>
        </body>
    </html>
    `
    const baseUrl = 'https://whispernet.github.io'
    const actual = getUrlFromHtml(htmlBody, baseUrl)
    const expected = ["https://whispernet.github.io/path"]
    expect(actual).toEqual(expected)
})

test('getUrlFromHtml array', () => {
    const htmlBody = `
    <html>
        <body>
            <a href="/path1">
                A Link
            </a>
            <a href="https://whispernet.github.io/path2">
                A Link
            </a>
        </body>
    </html>
    `
    const baseUrl = 'https://whispernet.github.io'
    const actual = getUrlFromHtml(htmlBody, baseUrl)
    const expected = ["https://whispernet.github.io/path1", "https://whispernet.github.io/path2"]
    expect(actual).toEqual(expected)
})

test('getUrlFromHtml invalid', () => {
    const htmlBody = `
    <html>
        <body>
            <a href="invalid">
                A Link
            </a>
            <a href="https://whispernet.github.io/path">
                A Link
            </a>
        </body>
    </html>
    `
    const baseUrl = 'https://whispernet.github.io'
    const actual = getUrlFromHtml(htmlBody, baseUrl)
    const expected = ["https://whispernet.github.io/path"]
    expect(actual).toEqual(expected)
})

