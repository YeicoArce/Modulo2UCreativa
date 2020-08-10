const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get noArticlesLabel () { return $('div=No articles are here... yet.') } 
    get yourFeedTab (){ return $('.nav-link=Your Feed')}
    get globalFeedTab (){ return $('.nav-link=Global Feed')} 
    
    getNoArticlesLabel(){
        return this.noArticlesLabel;
}
    getYourFeedTap () {
        return this.yourFeedTab;
    }

    getGlobalFeedTap(){

        return this.globalFeedTab;
    }
 
 }

module.exports = new DashboardPage();