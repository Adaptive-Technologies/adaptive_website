import sizes from '../support/index'
import testServices from '../support/testServices';

describe('Visitor can see hero section', () => {
  sizes.forEach((size) => {
    describe(`on ${size} view, successfully`, () => {
      beforeEach(() => {
        cy.viewport(testServices(size));
        cy.visit('/');
      });

      it('is expected to show hero section component', () => {
        cy.get('[data-testId=hero-bg').should('be.visible');
        cy.get('[data-testId=slogan').should(
          'contain.text',
          'Adaptive labs adapts your business to the future'
        );
        cy.get('[data-testId=contact-us-btn').should(
          'contain.text',
          '{ Adapt your business }'
        );
      });
    });
  });
});
