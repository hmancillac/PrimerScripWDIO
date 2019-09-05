const Page = require('./Page');

class HomePage extends Page {
    open() {
        super.open();
        browser.pause(2000);
    }
    load() {
        super.open();
    }
    /*
        Declare page elements
    */
    get searchBox() {
        return $('#searchBoxInput');
    }


    searchProduct(sku) {
        return this.searchBox.setValue(sku);
        
        /*this.emailInputBox.setValue(user.email);
        this.passwordInputBox.setValue(user.password);
        return this.loginButton.click();
        */
    }
}

module.exports = new HomePage();