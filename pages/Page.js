const urls = require('../data/environment');

class Page {
    open(url) {
        //url = url ? urls[process.env.env] + url : urls[process.env.env];
        //browser.url(url)
        console.log(process.env.env)
        browser.url("https://www.sodimac.cl/sodimac-cl/")
    }

    get logoSodimac() {
        return $('#NewLogo')
    }

    waitUntilPageLoads() {
        browser.waitUntil(() => {
            return !this.logoSodimac.isDisplayed()
        }, 15000, 'Page is still loading');
    }
}

module.exports = Page;