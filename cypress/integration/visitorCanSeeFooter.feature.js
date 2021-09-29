/* eslint-disable no-undef */
import sizes from '../support/index'
import TestServices from '../support/testServices'

describe('Visitor can see footer', () => {
  sizes.forEach((size) => {
    describe(`on ${size} view, successfully`, () => {
      beforeEach(() => {
        TestServices.sizeParams(size)
        cy.visit('/')
      })

      it('is expected to have correct contents', () => {
        cy.get('[data-cy=logo]')
          .should('have.attr', 'alt')
          .should('contain', 'Adaptive Labs Nordics AB Logo')
      })
    })
  })
})
