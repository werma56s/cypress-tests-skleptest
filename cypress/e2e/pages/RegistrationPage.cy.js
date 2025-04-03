class RegistrationPage {
    

    enterEmail(email) {
        cy.get('#reg_email').type(email);
    }

    enterPassword(password) {
        cy.get('#reg_password').type(password);
    }

    clickSubmitButton() {
        cy.get('button[name="register"]').click();
    }
}

export default new RegistrationPage();
