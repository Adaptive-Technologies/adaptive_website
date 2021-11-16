/* eslint-disable no-undef */
import sizes from '../support/index'
import TestServices from '../support/testServices'

describe('Visitor can see about us section', () => {
  sizes.forEach((size) => {
    describe(`For ${size} view`, () => {
      beforeEach(() => {
        TestServices.sizeParams(size)
        cy.visit('/')
      })

      it('is expected to display text about the company', () => {
        cy.get('[data-cy=about-us]').within(() => {
          cy.get('[data-cy=header]').should('contain', '< about us />')
          cy.get('[data-cy=description]').should(
            'contain.text',
            'Adaptive Labs Nordics was founded by a group of passionate developers and designers.'
          )
        })
      })

      it("is expected to list company's staff", () => {
        cy.get('[data-cy=about-us]').within(() => {
          cy.get('[data-cy=staff-card]').should('have.length', 4)
          cy.get('[data-cy=staff-card]')
            .first()
            .within(() => {
              cy.get('[data-cy=image]').should('be.visible')
              cy.get('[data-cy=name]').should('contain', 'Jens Østgaard')
              cy.get('[data-cy=description]').should(
                'contain',
                'As a designer educated in Florens, I thrive'
              )
            })
        })
      })
    })
  })
})
