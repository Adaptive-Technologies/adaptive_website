/* eslint-disable no-undef */
import sizes from '../support/index'
import TestServices from '../support/testServices';

describe('Visitor can see hero section', () => {
  sizes.forEach((size) => {
    describe(`on ${size} view, successfully`, () => {
      beforeEach(() => {
        TestServices.sizeParams(size)
        cy.visit('/');
      });

      it('is expected to have correct contents', () => {
        cy.get('[data-cy=slogan').should(
          'contain.text',
          'Adaptive labs adapts your business to the future'
        );
        cy.get('[data-cy=contact-us-btn').should(
          'contain.text',
          '{ Adapt your business }'
        );
      });
    });
  });
});
