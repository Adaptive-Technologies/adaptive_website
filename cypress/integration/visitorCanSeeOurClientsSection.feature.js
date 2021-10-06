/* eslint-disable no-undef */
import sizes from '../support/index'
import TestServices from '../support/testServices'

describe('Visitor can see our clients section', () => {
  sizes.forEach((size) => {
    describe(`on ${size} view, successfully`, () => {
      beforeEach(() => {
        TestServices.sizeParams(size)
        cy.visit('/')
      })

      it('is expected to have correct content', () => {
        cy.get('[data-cy=header]').should(
          'contain.text',
          '< clients that are adapting />'
        )
        cy.get('[data-cy=logo-grid]').within(() => {
          cy.get('[data-cy=logo-1]')
            .should('have.attr', 'alt')
            .should('contain', 'Flex Coast logo')
          cy.get('[data-cy=logo-2]')
            .should('have.attr', 'alt')
            .should('contain', 'Timotuz logo')
          cy.get('[data-cy=logo-3]')
            .should('have.attr', 'alt')
            .should('contain', 'KCSC logo')
          cy.get('[data-cy=logo-4]')
            .should('have.attr', 'alt')
            .should('contain', 'Walborg logo')
        })
      })
    })
  })
})
