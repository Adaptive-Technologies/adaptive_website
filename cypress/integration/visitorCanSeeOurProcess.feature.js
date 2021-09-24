/* eslint-disable no-undef */
import sizes from '../support/index'
import TestServices from '../support/testServices'

describe('Vistor can see our process', () => {
  sizes.forEach((size) => {
    describe(`For ${size} view, successfully`, () => {
      beforeEach(() => {
        TestServices.sizeParams(size)
        cy.visit('/')
      })

      describe('is expected to show our process section ', () => {
        it('is expected to show our process', () => {
          cy.get('[data-cy=step-0]').within(() => {
            cy.get('[data-cy=our-process]').should('contain', '< our process />')
            cy.get('[data-cy=body-1]').should(
              'contain.text',
              'Here at Adaptive Labs Nordics we work with the vision that everything is changing and we are here to help you adapt to these changes.'
            )
            cy.get('[data-cy=body-2]').should(
              'contain.text',
              'Below you can read about our 4 step plan in our process'
            )
          })
        })
        it('is expected to show meeting you', () => {
          cy.get('[data-cy=step-1]').within(() => {
            cy.get('[data-cy=heading]').should('contain', '1. Meeting You')
            cy.get('[data-cy=body-1]').should('not.exist')
            cy.get('[data-cy=body-2]').should('not.exist')
            cy.get('[data-cy=body-3]').should('not.exist')
          })
          cy.get('[data-cy=step-1]').click()
          cy.get('[data-cy=step-1]').within(() => {
            cy.get('[data-cy=heading]').should('contain', '1. Meeting You')
          })
          cy.get('[data-cy=accordionDetails-1]').within(() => {
            cy.get('[data-cy=body-1]').should(
              'contain.text',
              'First we arrange a meeting with you, in person or over the web.'
            )
            cy.get('[data-cy=body-2]').should(
              'contain.text',
              'During the meeting we want to get to know you better and what you'
            )
            cy.get('[data-cy=body-3]').should(
              'contain.text',
              'Once you’re happy with the LoFi’s we'
            )
          })
        })
        it('is expected to show design phase', () => {
          cy.get('[data-cy=step-2]').within(() => {
            cy.get('[data-cy=heading]').should('contain', '2. Design Phase')
            cy.get('[data-cy=body-1]').should('not.exist')
            cy.get('[data-cy=body-2]').should('not.exist')
            cy.get('[data-cy=body-3]').should('not.exist')
            cy.get('[data-cy=body-4]').should('not.exist')
          })
          cy.get('[data-cy=step-2]').click()
          cy.get('[data-cy=step-2]').within(() => {
            cy.get('[data-cy=heading]').should('contain', '2. Design Phase')
          })
          cy.get('[data-cy=accordionDetails-2]').within(() => {
            cy.get('[data-cy=body-1]').should(
              'contain.text',
              'During this phase we will deal with HiFi’s and technical analysis.'
            )
            cy.get('[data-cy=body-2]').should(
              'contain.text',
              'We will conduct user testing to make sure the UX/UI'
            )
            cy.get('[data-cy=body-3]').should(
              'contain.text',
              'You will receive a set of links to these Hifi’s where you can look around make notes'
            )
            cy.get('[data-cy=body-4]').should(
              'contain.text',
              'Hopefully all is in line with what you asked for and we can move forward.'
            )
          })
        })
        it('is expected to show Developing phase', () => {
          cy.get('[data-cy=step-3]').within(() => {
            cy.get('[data-cy=heading]').should('contain', '3. Developing')
            cy.get('[data-cy=body-1]').should('not.exist')
            cy.get('[data-cy=body-2]').should('not.exist')
            cy.get('[data-cy=body-3]').should('not.exist')
            cy.get('[data-cy=body-4]').should('not.exist')
          })
          cy.get('[data-cy=step-3]').click()
          cy.get('[data-cy=step-3]').within(() => {
            cy.get('[data-cy=heading]').should('contain', '3. Developing')
          })
          cy.get('[data-cy=accordionDetails-3]').within(() => {
            cy.get('[data-cy=body-1]').should(
              'contain.text',
              'Here is where those designs become a reality. We work from the HiFi’s we agreed on'
            )
            cy.get('[data-cy=body-2]').should(
              'contain.text',
              'Now we all know things change, which is why during the development we’ll have'
            )
            cy.get('[data-cy=body-3]').should(
              'contain.text',
              'We use something called automated testing, which means manual testing is reduced exponentially'
            )
            cy.get('[data-cy=body-4]').should(
              'contain.text',
              'That’s it time to move forward.'
            )
          })
        })
        it('is expected to show Delivery phase', () => {
          cy.get('[data-cy=step-4]').within(() => {
            cy.get('[data-cy=heading]').should('contain', '4. Delivery')
            cy.get('[data-cy=body-1]').should('not.exist')
            cy.get('[data-cy=body-2]').should('not.exist')
          })
          cy.get('[data-cy=step-4]').click()
          cy.get('[data-cy=step-4]').within(() => {
            cy.get('[data-cy=heading]').should('contain', '4. Delivery')
          })
          cy.get('[data-cy=accordionDetails-4]').within(() => {
            cy.get('[data-cy=body-1]').should(
              'contain.text',
              'The time has come for us to deliver the final application'
            )
            cy.get('[data-cy=body-2]').should(
              'contain.text',
              'Thats the Adaptive Process'
            )
          })
        })
      })
    })
  })
})
