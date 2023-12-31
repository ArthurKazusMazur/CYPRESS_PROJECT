/// <reference types="Cypress" />

describe("Hatstore shop", () => {
  it("Choose snapback in the hatstore", () => {
    // visit a web page
    cy.visit("/");
    // query for an element and interact with that element
    cy.get(".close-container > button").click();
    cy.contains("Snapback").click();

    // assert about the content of the page
    cy.url().should("contain", "/snapback/");
  });
});
