class LoginPage {
    // Login page elements
    elements = {
        emailInput: () => cy.get("#username"),
        passwordInput: () => cy.get("#password"),
        signInButton: () => cy.xpath("//button[contains(@class, 'login__submit')]"),
        accountButton: () => cy.get(".my-account.menu-item.menu-item-type-post_type > a"),
        accountTitle: () => cy.get("h1.entry-title"),
        addressLink: () => cy.get(".woocommerce-MyAccount-navigation-link")
    }

    // Visit the login page URL
    enterURL(url) {
        cy.visit(url);
        return this;
    }

    // Enter the email address
    enterEmail(email) {
        this.elements.emailInput().clear().type(email);
        return this;
    }

    // Enter the password
    enterPassword(password) {
        this.elements.passwordInput().clear().type(password);
        return this;
    }

    // Click the login button
    clickSignButton() {
        this.elements.signInButton().should('be.visible').click();
        return this;
    }

    // Click the "My Account" menu item
    clickAccountButton() {
        this.elements.accountButton().should('be.visible').click();
        return this;
    }

    // Check if login was successful
    // NOTE: Cypress does not support try/catch for command chains — this block is for structure only
    verifyPossityLogin(email) {
        try {
            cy.get("h1.entry-title").should('be.visible').should('have.text', "Moje konto");
            cy.get(".woocommerce-MyAccount-navigation-link").should('be.visible').should('contain.text', "Adres");
            return true;
        } catch (error) {
            return false;
        }
    }
}

const login = new LoginPage();
export default login;
