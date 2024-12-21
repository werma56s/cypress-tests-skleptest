Feature: Login into the site with valid data

    Background: Navigate to the Website
        Given Navigate to the Website "https://fakestore.testelka.pl/"
  
    Scenario: Login into the application
        Given Click button Account
        And Add Login
        And Add Password
        When Click Login button
        Then User see store elements
