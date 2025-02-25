// cypress/e2e/login.cy.js

import LoginPage from '../pages/LoginPage';

describe('SauceLab Login', () => {
    const loginPage = new LoginPage();

    it('should log in with valid credentials', () => {
        // Use the LoginPage methods
        loginPage.visit();
        loginPage.fillUsername('standard_user');
        loginPage.fillPassword('secret_sauce');
        loginPage.submit();
        loginPage.verifyDashboard();
    });
});