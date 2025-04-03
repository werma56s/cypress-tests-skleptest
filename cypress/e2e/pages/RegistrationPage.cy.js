class RegistrationPage {
    

    enterEmail(email) {
        cy.get('#reg_email').should('be.visible').type(email);
    }

    enterPassword(password) {
        cy.get('#reg_password').should('be.visible').type(password);
    }

    clickSubmitButton() {
        cy.get('button[name="register"]').should('be.visible').click();
    }
}

export default new RegistrationPage();
