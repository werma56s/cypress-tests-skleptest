class ProductPage {
    // Go to a specific product page
    navigateToPage(pageName) {
        cy.visit(`fakestore.testelka.pl/${pageName}`); 
    }

    // Select a category from the page (e.g., "Wspinaczka")
    selectCategory(categoryName) {
        cy.get('.product-category.product').contains(categoryName).scrollIntoView().should('be.visible').click(); // Zakładając, że kategorie są w menu z klasą '.category-menu'
    }

    // Add a specific product to the cart
    addProductToCart(productName, buttonText) {
        cy.get('ul.products.columns-3') // Znajdź kontener produktów
        .find('li.product') // Szukaj w każdym elemencie li, który jest produktem
        .contains(productName) // Sprawdź, czy nazwa produktu zawiera tekst productName
        .parents('li.product') // Znajdź rodzica, czyli cały element produktu
        .find('a') // Szukaj przycisku wewnątrz elementu produktu
        .contains(buttonText) // Sprawdź, czy przycisk zawiera tekst buttonText
        .should('be.visible') // Sprawdź, czy przycisk jest widoczny
        .click(); // Kliknij przycisk "Dodaj do koszyka"
    }

    // Verify if the "Zobacz koszyk" button is visible after adding the product to the cart
    verifyCartButtonVisibility(buttonText) {
        cy.contains(buttonText).scrollIntoView().should('be.visible'); // Sprawdza, czy przycisk "Zobacz koszyk" jest widoczny
    }
}

export default new ProductPage();
