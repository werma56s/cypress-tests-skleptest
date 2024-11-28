import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../pages/TestGridLoginPage.cy.js";
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

Then("User see store elements", () => {
    login.verifyPossityLogin();
});


function readJson(data) {
  return {
    email: data.logins[0].email,
    password: data.logins[0].password
  };
}