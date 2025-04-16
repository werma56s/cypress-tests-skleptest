class CartPage {
    // Elements
    elements = {
        cartIcon: () => cy.get('#site-header-cart > li > a.cart-contents'),
        cartPrice: () => cy.get('a > span.woocommerce-Price-amount'),
        cartCount: () => cy.get('a > span.count'),
        emptyCartLabel: () => cy.get('p.woocommerce-mini-cart__empty-message'),
        emptyCartMessage: () => cy.get('div.cart-empty.woocommerce-info'),
        cartTitle: () => cy.get('h1.entry-title'),
        backToShopBtn: () => cy.get('a.button.wc-backward'),
        miniCartProductName: () => cy.get('.woocommerce-mini-cart-item.mini_cart_item > a').eq(1),
        miniCartProductPrice: () => cy.get('span.quantity >span > bdi'),
        miniCartTotalPrice: () => cy.get('p.woocommerce-mini-cart__total.total > span > bdi'),
        cartProductName: () => cy.get('.product-name'),
        cartProductPrice: () => cy.get('.product-price'),
        cartProductTotal: () => cy.get('.product-subtotal'),
        removeProductBtn: () => cy.get('a.remove'),
        summaryTitle: () => cy.get('.cart_totals > h2'),
        vatInfo: () => cy.get('.includes_tax'),
        checkoutButton: () => cy.get('a.checkout-button.button'),
        cartActionButtons: () => cy.get('p.woocommerce-mini-cart__buttons.buttons > a.button')
    }

    // Hover over the cart icon to see cart details
    hoverCartIcon() {
        cy.scrollTo('top', { duration: 2000 });
        this.elements.cartIcon().scrollIntoView().should('be.visible').realHover();
    }

    // Verify cart icon details (price and product count)
    verifyCartIconDetails(price, productCount) {
        cy.scrollTo('top', { duration: 2000 });
        this.elements.cartPrice().should('be.visible').contains(price);
        this.elements.cartCount().should('be.visible').contains(productCount);
    }

    // Verify if the cart displays the correct label
    verifyCartLabel(labelText) {
        this.elements.emptyCartLabel().contains(labelText);
    }

    // Verify if the cart displays the correct label - Click cart icon
    verifyCartLabelClickCartIcon(labelText) {
        this.elements.emptyCartMessage().should('be.visible').contains(labelText);
    }

    // Click the cart icon to open the cart details
    clickCartIcon() {
        this.elements.cartIcon().scrollIntoView().should('be.visible').click();
    }

    // Verify cart information (e.g., "Koszyk" and "Wróć do sklepu")
    verifyCartInformation(info1, info2) {
        this.elements.cartTitle().scrollIntoView().should('contain', info1);
        this.elements.backToShopBtn().should('contain', info2);
    }

    // Verify details of a product in the cart (e.g., product name, price, total)
    verifyCartDetails(label1, label2, label3) {
        this.hoverCartIcon();
        this.elements.miniCartProductName().contains(label1).scrollIntoView().should('be.visible');
        this.hoverCartIcon();
        this.elements.miniCartProductPrice().contains(label2).scrollIntoView().should('be.visible');
        this.hoverCartIcon();
        this.elements.miniCartTotalPrice().contains(label3).scrollIntoView().should('be.visible');
    }

    verifyCartDetailsinCart(label1, label2, label3) {
        this.elements.cartProductName().contains(label1).should('be.visible');
        this.elements.cartProductPrice().contains(label2).should('be.visible');
        this.elements.cartProductTotal().contains(label3).should('be.visible');
    }

    // Verify that the cart displays icons and buttons correctly
    verifyProductIconAndButtons(icon, button1, button2) {
        cy.get(`a.${icon}_from_cart_button`).scrollIntoView().should('be.visible');
        this.elements.cartActionButtons().eq(0).contains(button1).should('be.visible');
        this.elements.cartActionButtons().eq(1).contains(button2).should('be.visible');
    }

    // Verify the summary and VAT details in the cart
    verifyCartSummaryDetails(summaryLabel, vatLabel, paymentButton) {
        this.elements.summaryTitle().should('have.text', summaryLabel);
        this.elements.vatInfo().contains(vatLabel).should('be.visible');
        this.elements.checkoutButton().contains(paymentButton).should('be.visible');
    }

    deleteProduct() {
        this.clickCartIcon();
        this.elements.removeProductBtn().scrollIntoView().should('be.visible').realClick();
    }
}

export default new CartPage();
