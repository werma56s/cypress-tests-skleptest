import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../pages/TestGridLoginPage.cy.js";

Given("Navigate to the Website {string}", (url) => {
    login.enterURL(url);
});

And("Add Login {string}", (email) => {
    login.enterEmail(email);
});

And("Add Password {string}", (password) => {
    login.enterPassword(password);
});

When("Click Login button", () => {
    login.clickSignButton();
});

Then("User see store elements", () => {
    login.verifyPossityLogin();
});
