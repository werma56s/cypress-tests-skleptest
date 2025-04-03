import { faker } from '@faker-js/faker';
// Zmienna do przechowywania danych użytkownika
let userFakeData = {};

beforeEach(() => {
    // Code that will be executed before each test
    cy.clearLocalStorage(); // Clearing local storage before each test
    // You can add other actions that should be performed before each test
    // For example, you might want to reset the database if necessary
    // cy.request('POST', '/reset-db'); // Example of resetting the database
    
    // Generowanie danych przed każdym testem
     userFakeData = {
        email: faker.internet.email(),
        password: faker.internet.password(12, true, /[A-Za-z0-9!\"?$%^&)]/, '$')
    };
    
    Cypress.env('userFakeData', userFakeData);
    cy.log(`Generated Email: ${userFakeData.email}`);
    cy.log(`Generated Password: ${userFakeData.password}`);
  });