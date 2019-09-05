const HomePage = require('../../pages/HomePage');


describe('Search Results validation', () => {
    it('Search Product', () => {
        HomePage.load(); 
        HomePage.searchProduct("tele")
        /*searchresultspage.load();
        let productTitle = searchresultspage.getProductTitle();
        searchresultspage.navigateToNextPage();
        expect(searchresultspage.loaderAnimation.isDisplayed());
        expect(searchresultspage.getProductTitle()).not.toEqual(productTitle);
        productTitle = searchresultspage.getProductTitle();
        searchresultspage.navigateToPreviousPage();
        expect(searchresultspage.loaderAnimation.isDisplayed());
        expect(searchresultspage.getProductTitle()).not.toEqual(productTitle);
        */
    });
});