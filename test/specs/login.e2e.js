const LoginPage = require('../pageobjects/login.page');
const NavigationPage = require('../pageobjects/navigation.page');
const DashboardPage = require('../pageobjects/dashboard.page');

describe('My Login application', () => {
    //cada "It" es una prueba aparte
    it('should login with valid credentials', () => {
        NavigationPage.open();
        NavigationPage.goToSignIn();
        //console.log(NavigationPage.getConduitText());
        browser.pause(5000);
        LoginPage.login('jeyco.arce.hernandez@ucreativa.com', 'Pruebas1234');
        //Aqui se evalua que tenga el link de cuando se ingresa exitosamente y 
        //que tenga el label correctamente
        expect(browser).toHaveUrl('https://demo.realworld.io/#/');
        expect(DashboardPage.getNoArticlesLabel()).toBeDisplayed();
        
       
        //expect(DashboardPage.getYourFeedTap).toBeFocused();
    });

    it('Your Feed activo por defecto', () => {
        //Aqui validamos que encontremos el YourFeed activado por defecto
        //expect(DashboardPage.getYourFeedTap()).toHaveAttribute('class', 'nav-link active');
    
    });

    it('Abrir otro tap', () => {
        DashboardPage.getGlobalFeedTap().click();
        //expect(DashboardPage.getGlobalFeedTap()).toHaveAttribute('class', 'nav-link active');
        expect(DashboardPage.getGlobalFeedTap()).toHaveClass('active', {message: 'Tap inactivo!',});
        //expect(DashboardPage.getGlobalFeedTap()).not.toHaveProperty('line-height', '24px');
        //expect(DashboardPage.getGlobalFeedTap()).toBeClickable()
        //expect(DashboardPage.getGlobalFeedTap()).toBeSelected()

    });

});