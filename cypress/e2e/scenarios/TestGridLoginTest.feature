Feature:  User authentication (Login and Registration)

  Background: User is on the home page
    Given The user navigates to the website "https://fakestore.testelka.pl/"

  Scenario: Successful login with valid credentials
    Given The user is a "normal_user"
    And The user is on the Account page
    When The user logs in with valid credentials
    Then The user should be successfully logged in

  Scenario: Successful user registration with valid data
    Given The user is on the Account page
    When The user registers with valid email and password
    Then The user should be successfully registered