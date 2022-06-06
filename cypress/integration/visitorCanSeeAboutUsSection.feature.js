/* eslint-disable no-undef */
import sizes from '../support/index'
import TestServices from '../support/testServices'

describe('Visitor can see news section', () => {
  sizes.forEach((size) => {
    describe(`For ${size} view`, () => {
      beforeEach(() => {
        TestServices.sizeParams(size)
        cy.visit('/')
      })

      it('is expected to display text about the company', () => {
        cy.get('[data-cy=about-us]').within(() => {
          cy.get('[data-cy=header]').should('contain', '< news />')
          cy.get('[data-cy=description]').should(
            'contain.text',
            'Since its inception in September 2021 Adaptive Labs, a Gothenburg based IT services '
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
              cy.get('[data-cy=name]').should('contain', 'Thomas Ochman')
              cy.get('[data-cy=description]').should(
                'contain.text',
                'Fullstack developer with a passion for turning ideas'
              )
            })
        })
      })
    })
  })
})
