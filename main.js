const { crawlPage } = require("./crawler")

async function main() {
    if (process.argv.length < 3) {
        console.log("Please provide a URL to crawl")
        process.exit(1)
    } else if (process.argv.length > 3) {
        console.log("Please provide only one URL to crawl")
        process.exit(1)
    } else {
        console.log(`Starting to Crawl ${process.argv[2]}`)
        const pages = await crawlPage(process.argv[2], process.argv[2], {})

        for (const page of Object.entries(pages)) {
            console.log(page)
        }
    }
}

main()