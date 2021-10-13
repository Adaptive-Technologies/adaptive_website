/* eslint-disable no-undef */
import sizes from '../support/index'
import TestServices from '../support/testServices'

describe('Visitor can see Craft Academy section', () => {
  sizes.forEach((size) => {
    describe(`For ${size} view`, () => {
      beforeEach(() => {
        TestServices.sizeParams(size)
        cy.visit('/')
      })

      it('is expected to display text about Craft Academy', () => {
        cy.get('[data-cy=craft-academy]').within(() => {
          cy.get('[data-cy=header]').should('contain', '< craft academy />')
          cy.get('[data-cy=sub-header]').should(
            'contain',
            'The future is written in code'
          )
          cy.get('[data-cy=description]').should(
            'contain.text',
            'Digitalization is not only changing the way we do business, it'
          )
          cy.get('[data-cy=logo]').should('have.attr', 'alt').should('contain', 'Craft Academy Logo')
          cy.get('[data-cy=button]').should('have.attr', 'href').should('contain', 'https://craftacademy.se')
        })
      })
    })
  })
})
