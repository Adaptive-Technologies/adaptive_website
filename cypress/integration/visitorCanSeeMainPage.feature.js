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
          cy.get('[data-cy=home]').should('contain', '< home />');
          cy.get('[data-cy=our-approach]').should(
            'contain',
            '< our approach />'
          );
          cy.get('[data-cy=technologies]').should(
            'contain',
            '< technologies />'
          );
          cy.get('[data-cy=about]').should('contain', '< about />');
          cy.get('[data-cy=contact-us]').should('contain', '< contact us />');
          cy.get('[data-cy=adaptive-logo]').should('exist');
        });
      });
    });
  });
});
