class LoginPage {

    enterURL(url) {
        cy.visit(url);
        return this;
    }

    enterEmail(email) {
        cy.get("#username").clear().type(email);
        return this;
    }

    enterPassword(password) {
        cy.get("#password").clear().type(password);
        return this;
    }

    clickSignButton() {
        cy.xpath("//button[contains(@class, \"login__submit\")]").should('be.visible').click();
        return this;
    }

    clickAccountButton(){
        cy.get(".my-account.menu-item.menu-item-type-post_type > a").should('be.visible').click();
        return this;
    }

    verifyPossityLogin(email) {
    try{
        //cy.get(".woocommerce-MyAccount-content > p >strong:first-child").should('have.text', email.split('@')[0].toLowerCase());
        cy.get("h1.entry-title").should('be.visible').should('have.text', "Moje konto");
        cy.get(".woocommerce-MyAccount-navigation-link").should('be.visible').should('contain.text', "Adres");
        return true;
    }catch(error){ return false; }
    }

}
const login = new LoginPage();
export default login;
