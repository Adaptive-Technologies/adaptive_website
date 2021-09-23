/* eslint-disable no-undef */
import sizes from '../support/index'
import TestServices from '../support/testServices'

describe('Vistor can see and use contact section', () => {
  sizes.forEach((size) => {
    describe(`For ${size} view, successfully`, () => {
      beforeEach(() => {
        TestServices.sizeParams(size)
        cy.visit('/')
        TestServices.sizeCase(size)
      })

      it('is expected to show contact us section', () => {
        cy.get('[data-cy=contact-us-header]').should(
          'contain',
          '< contact us />'
        )
        cy.get('[data-cy=contact-us-sub-header]').should(
          'contain',
          'Get in touch'
        )
        cy.get('[data-cy=contact-us-text]').should(
          'contain',
          'To know more about what we can offer you, please get in touch. Feel free to call, email, send us a message on LinkedIn or feel free to use the form'
        )
        cy.get('[data-cy=contact-us-form-header]').should(
          'contain',
          'Send us a message'
        )
        cy.get('[data-cy=contact-us-form]').within(() => {
          cy.get('[data-cy=contact-us-form-name]').type('Bob Kramer')
          cy.get('[data-cy=contact-us-form-email]').type(
            'bobkramer@adaptivelabsnordics.se'
          )
          cy.get('[data-cy=contact-us-form-phone]').type('0707932550')
          cy.get('[data-cy=contact-us-form-message]').type(
            'I would like to talk about an application I would like to be built.'
          )
          cy.get('[data-cy=contact-us-form-checkbox]').check()
          cy.get('[data-cy=contact-us-form-submit]').click()
        })
      })
    })
  })
})
