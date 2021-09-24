/* eslint-disable no-undef */
import sizes from '../support/index'
import TestServices from '../support/testServices'

describe('Vistor can see and use contact section', () => {
  sizes.forEach((size) => {
    describe(`For ${size} view, successfully`, () => {
      beforeEach(() => {
        TestServices.sizeParams(size)
        cy.visit('/')
      })

      it('is expected to show contact us section', () => {
        cy.get('[data-cy=contact-us-header]').should(
          'contain',
          '< Contact us />'
        )
        cy.get('[data-cy=contact-us-sub-header]').should(
          'contain',
          'Get in touch'
        )
        cy.get('[data-cy=contact-us-text]').should(
          'contain',
          'To know more about what we can offer you, please get in touch. Feel free to send us an email, a message on LinkedIn or use the form. We will be happy to discuss your requirements and present a possible solution.'
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
          cy.get('[data-cy=contact-us-form-submit]').should(
            'contain',
            '{ send message }'
          )
        })
      })
    })
  })
})
