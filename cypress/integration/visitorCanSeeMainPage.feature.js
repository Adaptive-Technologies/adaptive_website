import sizes from "../support/index";
import TestServices from "../support/testServices";

describe("Vistor can see main page", () => {
  sizes.forEach((size) => {
    describe(`For ${size} view, successfully`, () => {
      beforeEach(() => {
        cy.visit("/");
      });

      it("is expected to show the main page ", () => {
        cy.get("[data-cy=title]").should("contain", "Hello World");
      });
    });
  });
});
