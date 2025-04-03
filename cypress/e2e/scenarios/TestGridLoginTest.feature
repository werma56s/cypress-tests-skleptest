Feature:  User authentication (Login and Registration)

    Background: Navigate to the Website
        Given Navigate to the Website "https://fakestore.testelka.pl/"
  
    Scenario: Login into the application
        Given Click button Account
        And Add Login
        And Add Password
        When Click Login button
        Then User see store elements "login"

    Scenario: Successful user registration
        Given Click button Account
        And Enter Registration Email
        And Enter Registration Password
        When Click Register submit button
        Then User see store elements "registration"