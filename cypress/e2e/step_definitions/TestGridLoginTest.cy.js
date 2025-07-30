import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../pages/TestGridLoginPage.cy.js";
import register from "../pages/RegistrationPage.cy.js";
const data = require('../../data/LoginData.json');


let loginData = {};

before(() => {
  loginData = readJson(data);
});

// User Type Selection
Given("The user is a {string}", (userType) => {
    //expect(userType).to.eq(loginData.userType);
    cy.log(`User Type: ${userType}`);
});

// Navigate to Website
Given("The user navigates to the website {string}", (url) => {
    login.enterURL(url);
});

// Account Page
Given("The user is on the Account page", () => {
    login.clickAccountButton();
});

// Login Actions
When("The user logs in with valid credentials", () => {
    cy.log(`Logging in with Email: ${loginData.email}`);
    login.enterEmail(loginData.email);
    login.enterPassword(loginData.password);
    login.clickSignButton();
});

Then("The user should be successfully logged in", () => {
    login.verifyPossityLogin(loginData.email);
});

// Registration Actions
When("The user registers with valid email and password", () => {
    const userFakeData = Cypress.env('userFakeData');
    cy.log(`Registering Email: ${userFakeData.email}`);
    register.enterEmail(userFakeData.email);
    register.enterPassword(userFakeData.password);
    register.clickSubmitButton();
});

Then("The user should be successfully registered", () => {
    const userFakeData = Cypress.env('userFakeData');
    login.verifyPossityLogin(userFakeData.email);
});

// Helper Function to read login data
function readJson(data) {
    const login = data.logins[0];
    return {
        email: login.email,
        password: login.password,
        userType: login.userType
    };
}