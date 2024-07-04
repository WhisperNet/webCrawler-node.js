const { JSDOM } = require('jsdom')

function normalizeUrl(url) {
    const urlObj = new URL(url)
    const parsedUrl = `${urlObj.hostname}${urlObj.pathname}`
    if (parsedUrl.endsWith('/')) {
        return parsedUrl.slice(0, -1)
    }
    return parsedUrl
}

function getUrlFromHtml(htmlBody, baseUrl) {
    const links = []
    const jsdom = new JSDOM(htmlBody)
    const aTags = jsdom.window.document.querySelectorAll('a')

    for (let aTag of aTags) {
        try {
            if (aTag.href.slice(0, 1) === "/") {
                // realtive url
                const urlobj = new URL(baseUrl + aTag.href) // checking if this is a valid URL , if not will throw an error and not be pushed to the links array
                links.push(baseUrl + aTag.href)
            } else {
                // absolute url
                const urlobj = new URL(aTag.href) // checking if this is a valid URL , if not will throw an error and not be pushed to the links array
                links.push(aTag.href)
            }

        } catch (err) {
            console.log(`${err.message} ${aTag.href} is not a valid URL`)
        }
    }

    return links
}

module.exports = { normalizeUrl, getUrlFromHtml }