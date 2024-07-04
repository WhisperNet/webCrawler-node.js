function report(pages) {
    const asciiArt1 = String.raw`
               ____                       _                 
 _____ _____  |  _ \ ___ _ __   ___  _ __| |_   _____ _____ 
|_____|_____| | |_) / _ \ '_ \ / _ \| '__| __| |_____|_____|
|_____|_____| |  _ <  __/ |_) | (_) | |  | |_  |_____|_____|
              |_| \_\___| .__/ \___/|_|   \__|              
                        |_|                                                                                                            
`
    const asciiArt2 = String.raw`
               _____ _       _     _                   
 _____ _____  |  ___(_)_ __ (_)___| |__    _____ _____ 
|_____|_____| | |_  | | '_ \| / __| '_ \  |_____|_____|
|_____|_____| |  _| | | | | | \__ \ | | | |_____|_____|
              |_|   |_|_| |_|_|___/_| |_|              
`
    console.log(asciiArt1)

    const sortedPages = sort(pages)
    for (const page of sortedPages) {
        console.log(`Found ${page[1]} times: ${page[0]}`)
    }

    console.log(asciiArt2)


}

function sort(pages) {
    const pagesArr = Object.entries(pages)

    pagesArr.sort((a, b) => {
        return b[1] - a[1]
    })
    return pagesArr
}

module.exports = { sort, report }