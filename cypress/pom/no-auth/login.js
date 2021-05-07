export const LOGIN_PAGE_URL = '/login';
export const HOMEPAGE_URL = 'https://kumparan.com';

export default class Login {
  /**
   * Return email address input field
   * @returns {Cypress.Chainable} cy.get promise
   * @example
   * Login.getEmailAddressField().type("something@mail.id");
   */
  static getEmailAddressField() {
    return cy.get('[data-qa-id="input-email"]');
  }

  /**
   * Return password input field
   * @returns {Cypress.Chainable} cy.get promise
   * @example
   * Login.getPasswordField().type('password');
   */
  static getPasswordField() {
    return cy.get('[data-qa-id="input-password"]');
  }

  /**
   * Returns link to Forgot Password page
   * @returns {Cypress.Chainable} cy.get promise
   * @example
   * Login.getForgotPasswordLink().click();
   */
  static getForgotPasswordLink() {
    return cy.get('[data-qa-id="btn-forgot-password"]');
  }

  /**
   * Return error message
   * @returns {Cypress.Chainable} cy.get promise
   * @example
   * Login.getErrorAlert().should('be.visible')
   */
  static getErrorAlert() {
    return cy.get('.Textweb__StyledText-sc-1fa9e8r-0 etlKpB');
  }

  /**
   * Return save button in Input Information tab
   * @returns {Cypress.Chainable} cy.get
   * @example
   * InputInformation.getSaveButton();
   */
  static getSaveButton() {
    return cy.get('[data-qa-id="btn-save"]');
  }

  /**
   * Login on frontoffice
   * @param {string} email - email address
   * @param {string} password
   * @example
   * Login.login(`mustaqim@investree.id`, 'Brandal17')
   */
  static login(email, password) {
    this.getEmailAddressField().type(email);
    this.getPasswordField().type(password);
    this.getSaveButton().click();
  }

  /**
   * Visit login page
   * @example
   * Login.visitPage();
   */
  static visitPage() {
    cy.visit(HOMEPAGE_URL + LOGIN_PAGE_URL);
  }
}
