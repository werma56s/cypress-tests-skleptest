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
        cy.xpath("//button[contains(@class, \"login__submit\")]").click();
        return this;
    }

    clickAccountButton(){
        cy.get(".my-account.menu-item.menu-item-type-post_type > a").click();
        return this;
    }

    verifyPossityLogin() {
    try{
        cy.get(".woocommerce-MyAccount-content > p >strong:first-child").should('have.text', "werna56s");
        cy.get("h1.entry-title").should('have.text', "Moje konto");
        cy.get(".woocommerce-MyAccount-navigation-link").should('contain.text', "Adres");
        return true;
    }catch(error){ return false; }
    }
}
const login = new LoginPage();
export default login;
