// cypress/e2e/login.cy.js

describe('First test', () => {
    it('checks page title', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        
        // Correct title assertion
        cy.title().should('eq', 'OrangeHRMs');
    });
});
