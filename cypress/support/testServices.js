/ *eslint-disable no-undef */;

const TestServices = {
  sizeParams(size) {
    if (Cypress._.isArray(size)) {
      cy.viewport(size[0], size[1]);
    } else {
      cy.viewport(size);
    }
  },
};
