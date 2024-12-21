import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import cartPage from "../pages/CartPage.cy.js"; // Assuming CartPage.cy.js handles interactions with the cart page.
import productPage from "../pages/ProductPage.cy.js"; // Assuming ProductPage.cy.js handles product-related interactions.

Given("Hover cart icon", () => {
    cartPage.hoverCartIcon();
});

Then("The cart icon should display the number {string} and {string}", (price, productCount) => {
    cartPage.verifyCartIconDetails(price, productCount);
});

And("The cart display label {string}", (labelText) => {
    cartPage.verifyCartLabel(labelText);
});

Given("Click cart icon", () => {
    cartPage.clickCartIcon();
});

Then("The cart display label {string}", (labelText) => {
    cartPage.verifyCartLabel(labelText);
});

Then("The cart display label {string} - Click cart icon", (labelText) => {
    cartPage.verifyCartLabelClickCartIcon(labelText);
});

And("User see informations {string} and {string}", (info1, info2) => {
    cartPage.verifyCartInformation(info1, info2);
});

Given("Go to product page {string}", (pageName) => {
    productPage.navigateToPage(pageName);
});

Given("Select category {string}", (categoryName) => {
    productPage.selectCategory(categoryName);
});

When("Click the {string} button on {string} produkt", (buttonText, productName) => {
    productPage.addProductToCart(productName, buttonText);
});

Then("The cart icon should display the number {string} and {string}", (price, productCount) => {
    cartPage.verifyCartIconDetails(price, productCount);
});


Given("Go to product page {string}", (pageName) => {
    productPage.navigateToPage(pageName);
});

Given("Select category {string}", (categoryName) => {
    productPage.selectCategory(categoryName);
});

When("Click the {string} button on {string} produkt", (buttonText, productName) => {
    productPage.addProductToCart(productName, buttonText);
});

And("Hover cart icon", () => {
    cartPage.hoverCartIcon();
});

Then("The cart display labels {string}, {string}, {string}", (label1, label2, label3) => {
    cartPage.verifyCartDetails(label1, label2, label3);
});

Then("The cart display labels in cart {string}, {string}, {string}", (label1, label2, label3) => {
    cartPage.verifyCartDetailsinCart(label1, label2, label3);
});

And("User see icon {string} product and buttons: {string}, {string}", (icon, button1, button2) => {
    cartPage.verifyProductIconAndButtons(icon, button1, button2);
});

Given("Go to product page {string}", (pageName) => {
    productPage.navigateToPage(pageName);
});

Given("Select category {string}", (categoryName) => {
    productPage.selectCategory(categoryName);
});

When("Click the {string} button on {string} produkt", (buttonText, productName) => {
    productPage.addProductToCart(productName, buttonText);
});

And("Click cart icon", () => {
    cartPage.clickCartIcon();
});

Then("The cart display labels {string}, {string}, {string}", (label1, label2, label3) => {
    cartPage.verifyCartDetails(label1, label2, label3);
});

And("User see icon {string} and buttons: {string}, {string}", (icon, button1, button2) => {
    cartPage.verifyProductIconAndButtons(icon, button1, button2);
});

And("User see the cart display labels {string}, {string}, and button {string}", (summaryLabel, vatLabel, paymentButton) => {
    cartPage.verifyCartSummaryDetails(summaryLabel, vatLabel, paymentButton);
});

//Delete product in cart
And("Delete product in cart", () => {
    cartPage.deleteProduct();
});