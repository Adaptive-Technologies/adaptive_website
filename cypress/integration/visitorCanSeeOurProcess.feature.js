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
            cy.get('[data-cy=our-process]').should(
              'contain',
              '< our process />'
            )
            cy.get('[data-cy=body-1]').should(
              'contain.text',
              'Here at Adaptive Labs we work with the vision that everything is changing.'
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
              "First we will arrange a meeting with you, in person or remote, we're flexible."
            )
            cy.get('[data-cy=body-2]').should(
              'contain.text',
              'During the meeting, we want to get to know you and the expectations on your application.'
            )
            cy.get('[data-cy=body-3]').should(
              'contain.text',
              "Once you're happy, we can move forward with the design phase."
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
              'During this phase we deal with generating a detailed draft or'
            )
            cy.get('[data-cy=body-2]').should(
              'contain.text',
              'The',
              "HiFi's",
              'will be shared via a link which gives the possibility to navigate the application and create comments and notes. A final meeting is arranged to review aforementioned.'
            )
            cy.get('[data-cy=body-3]').should(
              'contain.text',
              'Hopefully everything is in order and development can begin.'
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
              'Here is where those designs become reality. We work from the agreed upon'
            )
            cy.get('[data-cy=body-2]').should(
              'contain.text',
              'As Heraclitus said "change is the only constant in life". Which is why'
            )
            cy.get('[data-cy=body-3]').should(
              'contain.text',
              'We use automated testing, which reduces bugs, improves maintainability and a higher standard of code. Less problems for you and less head scratching for us'
            )
            cy.get('[data-cy=body-4]').should(
              'contain.text',
              'That’s it, time to move forward.'
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
              "The time has come for the final application delivery. We'll give you a guided tour of your application, answer your questions, supply any documentation and deploy the site on your domain for the world to see."
            )
            cy.get('[data-cy=body-2]').should(
              'contain.text',
              "That's the Adaptive Process"
            )
          })
        })
      })
    })
  })
})
