Feature: Shopping cart functionality

    Background: Navigate to the Website
        Given Navigate to the Website "https://fakestore.testelka.pl/"
        Given Click button Account
        And Enter Registration Email
        And Enter Registration Password
        When Click Register submit button
        Then User see store elements "registration"

    Scenario: T1A Verify empty cart display - Hover cart icon
    Given Hover cart icon 
    Then The cart icon should display the number "0,00 zł" and "0 Produkt"
    And The cart display label "Brak produktów w koszyku."

    Scenario: T1B Verify empty cart display - Click cart icon
    Given Click cart icon 
    Then The cart display label "Twój koszyk jest pusty." - Click cart icon
    And User see informations "Koszyk" and "Wróć do sklepu"

    Scenario: T2A Add product to cart
    Given Go to product page "shop"
    And Select category "Wspinaczka"
    When Click the "Dodaj do koszyka" button on "Wspinaczka Island Peak" produkt
    Then The cart icon should display the number "8 200,00 zł" and "1 Produkt"
    And Delete product in cart

    Scenario: T2B Add product to cart - Hover cart icon
    Given Go to product page "shop"
    And Select category "Wspinaczka"
    When Click the "Dodaj do koszyka" button on "Wspinaczka Island Peak" produkt
    And Hover cart icon
    Then The cart display labels "Wspinaczka Island Peak", "8 200,00 zł", "8 200,00 zł"
    And User see icon "remove" product and buttons: "Zobacz koszyk", "Zamówienie"
    And Delete product in cart

    Scenario: T2C Add product to cart - Click cart icon
    Given Go to product page "shop"
    And Select category "Wspinaczka"
    When Click the "Dodaj do koszyka" button on "Wspinaczka Island Peak" produkt
    And Click cart icon 
    Then The cart display labels in cart "Wspinaczka Island Peak", "8 200,00 zł", "8 200,00 zł"
    And User see the cart display labels "Podsumowanie koszyka", "(zawiera 1 533,33 zł VAT)", and button "Przejdź do płatności"
    And Delete product in cart