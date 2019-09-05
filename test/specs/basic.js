const { remote } = require('webdriverio');

/*(async () => {
    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://duckduckgo.com/')

    const inputElem = await browser.$('#search_form_input_homepage')
    await inputElem.setValue('WebdriverIO')

    const submitBtn = await browser.$('#search_button_homepage')
    await submitBtn.click()

    console.log(await browser.getTitle()) // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"

    await browser.deleteSession()
})().catch((e) => console.error(e))

*/

/*describe('DuckDuckGo search', () => {
    it('searches for WebdriverIO', () => {
        browser.url('https://duckduckgo.com/')

        $('#search_form_input_homepage').setValue('WebdriverIO')
        $('#search_button_homepage').click()

        const title = browser.getTitle()
        console.log('Title is: ' + title)
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
})
*/