import sizes from '../support/index';
import TestServices from '../support/testServices';

describe('Vistor can see main page', () => {
  sizes.forEach((size) => {
    describe(`For ${size} view, successfully`, () => {
      beforeEach(() => {
        cy.visit('/');
      });

      it('is expected to show the main page ', () => {
        cy.get('[data-cy=navbar]').within(() => {
          cy.get('[data-cy=home]').should('contain', '<Home/>');
          cy.get('[data-cy=our-approach]').should('contain', '<Our Approach/>');
          cy.get('[data-cy=technologies]').should('contain', '<Technologies/>');
          cy.get('[data-cy=about]').should('contain', '<About/>');
          cy.get('[data-cy=contact-us]').should('contain', '<Contact Us/>');
          cy.get('data-cy=adaptive-logo').should('exist');
        });
      });
    });
  });
});
