import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../pages/TestGridLoginPage.cy.js";
import register from "../pages/RegistrationPage.cy.js";
const data = require('../../data/LoginData.json');
const loginData = readJson(data);


Given("Navigate to the Website {string}", (url) => {
    login.enterURL(url);
});

Given("Click button Account", () => {
    login.clickAccountButton();
});

And("Add Login", () => {
    cy.log(`Email: ${loginData.email}, Password: ${loginData.password}`);
    login.enterEmail(loginData.email);
});

And("Add Password", () => {
    login.enterPassword(loginData.password);
});

When("Click Login button", () => {
    login.clickSignButton();
});

Then("User see store elements {string}", (type) => {
    if(type === "registration"){
    // Pobieramy dane z Cypress.env()
    const userFakeData = Cypress.env('userFakeData');
    login.verifyPossityLogin(userFakeData.email);
    }
    login.verifyPossityLogin(loginData.email);
});

// Registration steps
And("Enter Registration Email", () => {
    // Pobieramy dane z Cypress.env()
    const userFakeData = Cypress.env('userFakeData');
    cy.log(`Registration Email: ${userFakeData.email}`);
    register.enterEmail(userFakeData.email);
});

And("Enter Registration Password", () => {
    // Pobieramy dane z Cypress.env()
    const userFakeData = Cypress.env('userFakeData');
    register.enterPassword(userFakeData.password);
});

When("Click Register submit button", () => {
    register.clickSubmitButton();
});


function readJson(data) {
  return {
    email: data.logins[0].email,
    password: data.logins[0].password
  };
}