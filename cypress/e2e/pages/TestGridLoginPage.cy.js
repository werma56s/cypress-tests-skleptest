class LoginPage {
    enterURL(url) {
        cy.visit(url);
        return this;
    }

    enterEmail(username) {
        cy.get("#user-name").clear().type(username);
        return this;
    }

    enterPassword(password) {
        cy.get("#password").clear().type(password);
        return this;
    }

    clickSignButton() {
        cy.get("#login-button").click();
        return this;
    }

    verifyPossityLogin() {
    try{
        cy.get(".header_secondary_container").should('have.text', "Products");
        cy.get(".inventory_list").should('have.text', "Sauce Labs Backpack");
        cy.get(".shopping_cart_link").should('have.text', "Products");
        return true;
    }catch(error){ return false; }
    }
}
const login = new LoginPage();
export default login;
