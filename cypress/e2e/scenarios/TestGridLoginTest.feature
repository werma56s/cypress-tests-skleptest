Feature: Login into the site with valid data

    Background: Navigate to the Website
        Given Navigate to the Website "https://skleptest.pl/"
  
    Scenario: Login into the application - standard_user
        And Add Login "standard_user"
        And Add Password "secret_sauce"
        When Click Login button
        Then User see store elements
