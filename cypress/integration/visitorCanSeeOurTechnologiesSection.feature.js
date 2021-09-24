/* eslint-disable no-undef */
import sizes from '../support/index'
import TestServices from '../support/testServices'

describe('Visitor can see technologies section', () => {
  sizes.forEach((size) => {
    describe(`on ${size} view, successfully`, () => {
      beforeEach(() => {
        TestServices.sizeParams(size)
        cy.visit('/')
      })

      it('is expected to have correct contents', () => {
        cy.get('[data-cy=technologies-section]').within(() => {
          cy.get('[data-cy=header]').should('contain.text', '< technologies />')
          cy.get('[data-cy=technology]').should('have.length', 6)
          cy.get('[data-cy=technology]').first().within(() => {
            cy.get('[data-cy=icon]').should('be.visible')
            cy.get('[data-cy=name]').should('contain.text', 'React')
          })
        })
      })
    })
  })
})
