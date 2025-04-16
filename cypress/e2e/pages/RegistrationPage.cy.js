class RegistrationPage {
    // Registration form elements
    elements = {
        emailInput: () => cy.get('#reg_email'),
        passwordInput: () => cy.get('#reg_password'),
        registerButton: () => cy.get('button[name="register"]')
    }

    // Enter the email address
    enterEmail(email) {
        this.elements.emailInput()
            .should('be.visible')
            .type(email);
    }

    // Enter the password
    enterPassword(password) {
        this.elements.passwordInput()
            .should('be.visible')
            .type(password);
    }

    // Click the register button
    clickSubmitButton() {
        this.elements.registerButton()
            .should('be.visible')
            .click();
    }
}

export default new RegistrationPage();
