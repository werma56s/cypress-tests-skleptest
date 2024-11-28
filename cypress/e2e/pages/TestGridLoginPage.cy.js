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
        cy.get(".top-account > a").click();
        return this;
    }

    verifyPossityLogin() {
    try{
        cy.get(".woocommerce-MyAccount-content >p >strong:first-child").should('have.text', "werna56s");
        cy.get("h1.page-title.margin-top").should('have.text', "My account");
        cy.get(".woocommerce-MyAccount-navigation-link").should('contain.text', "Addresses");
        return true;
    }catch(error){ return false; }
    }
}
const login = new LoginPage();
export default login;
