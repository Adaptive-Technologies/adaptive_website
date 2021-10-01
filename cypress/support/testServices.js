/* eslint-disable no-undef */

const TestServices = {
  sizeParams(size) {
    if (Cypress._.isArray(size)) {
      cy.viewport(size[0], size[1], size[2], size[3])
    } else {
      cy.viewport(size)
    }
  },

  sizeCase(size) {
    switch (size) {
      case 'iphone-x':
        cy.get('[data-cy=hamburger-menu]').click()
        break
      case 'ipad-2':
        cy.get('[data-cy=hamburger-menu]').click()
        break
      case 'macbook-16':
        cy.get('[data-cy=hamburger-menu]').click()
        break
      default:
        cy.get('[data-cy=navbar]').should('exist')
        break
    }
  },
}

export default TestServices
