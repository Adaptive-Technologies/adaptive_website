/* eslint-disable no-undef */
import sizes from '../support/index'
import TestServices from '../support/testServices'

describe('Visitor can see application header', () => {
  sizes.forEach((size) => {
    describe(`For ${size} view, successfully`, () => {
      beforeEach(() => {
        TestServices.sizeParams(size)
        cy.visit('/')
        TestServices.sizeCase(size)
      })

      it('is expected to have the navigation menu', () => {
        cy.get('[data-cy=home]').should('contain', '< home />')
        cy.get('[data-cy=our-approach]').should('contain', '< our approach />')
        cy.get('[data-cy=technologies]').should('contain', '< technologies />')
        cy.get('[data-cy=about]').should('contain', '< about />')
        cy.get('[data-cy=contact-us]').should('contain', '< contact us />')
        cy.get('[data-cy=adaptive-logo]').should('exist')
      })
    })
  })
})
