const { crawlPage } = require("./crawler")

function main() {
    if (process.argv.length < 3) {
        console.log("Please provide a URL to crawl")
        process.exit(1)
    } else if (process.argv.length > 3) {
        console.log("Please provide only one URL to crawl")
        process.exit(1)
    } else {
        console.log(`Crawling ${process.argv[2]}`)
        crawlPage(process.argv[2])
    }
}

main()