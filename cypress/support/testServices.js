/* eslint-disable no-undef */

const TestServices = {
  sizeParams(size) {
    if (Cypress._.isArray(size)) {
      cy.viewport(size[0], size[1])
    } else {
      cy.viewport(size)
    }
  },

  sizeCase(size) {
    debugger
    switch (size) {
      case 'macbook-16':
        cy.get('[data-cy=navbar]').should('exist')
        break

      default:
        cy.get('[data-cy=hamburger-menu]').click()
        break
    }
  },
}

export default TestServices
