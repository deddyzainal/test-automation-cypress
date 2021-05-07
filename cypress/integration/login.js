import Login, { LOGIN_PAGE_URL, HOMEPAGE_URL } from '@pom/no-auth/login';
import faker from 'faker';

describe('User Login', function () {
  before(function () {
    cy.fixture('json/users.json').as('Users');
  });

  beforeEach(function () {
    Login.visitPage();
  });

  describe('#smoke', function () {
    it('Using valid credential should redirect to homepage #FE-1', function () {
      cy.meta({
        severity: 'blocker'
      });

      Login.login(this.Users.user_data.username, this.Users.user_data.password);

      cy.url().should('contain', HOMEPAGE_URL);
    });
  });
  describe('#negative', function () {
    it('Using invalid credential should showing error alert #FE-2', function () {
      cy.meta({
        severity: 'blocker'
      });

      Login.login(this.Users.user_data.username, faker.random.alphaNumeric(10));

      Login.getErrorAlert().should('be.visible');
      cy.url().should('contain', LOGIN_PAGE_URL);
    });
  });
});
