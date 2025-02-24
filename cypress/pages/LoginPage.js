// cypress/pages/LoginPage.js
import { LOGIN_PAGE } from '../support/locators';

class LoginPage {
    visit() {
        cy.visit('/');  // This should use the baseUrl from cypress.config.js
    }

    fillUsername(username) {
        cy.get(LOGIN_PAGE.username).type(username);
    }

    fillPassword(password) {
        cy.get(LOGIN_PAGE.password).type(password);
    }

    submit() {
        cy.get(LOGIN_PAGE.submitButton).click();
    }

    verifyDashboard() {
        cy.get(LOGIN_PAGE.dashboardBreadcrumb).should('have.text', 'Products');
    }
}

export default LoginPage;


// import { LOGIN_PAGE } from '../support/locators'; // Correct import from the support folder

// class LoginPage {
//     visit() {
//         cy.visit('https://opensource-demo.orangehrmlive.com/');
//     }

//     fillUsername(username) {
//         cy.get(LOGIN_PAGE.username).type(username); // Using LOGIN_PAGE.username from locators.js
//     }

//     fillPassword(password) {
//         cy.get(LOGIN_PAGE.password).type(password); // Using LOGIN_PAGE.password from locators.js
//     }

//     submit() {
//         cy.get(LOGIN_PAGE.submitButton).click(); // Using LOGIN_PAGE.submitButton from locators.js
//     }

//     verifyDashboard() {
//         cy.get(LOGIN_PAGE.dashboardBreadcrumb).should('have.text', 'Dashboard'); // Using LOGIN_PAGE.dashboardBreadcrumb from locators.js
//     }
// }

// export default LoginPage;
