// selectors
export const result = '[data-testid="product-grid-product-card"]';

// methods
export class SearchResults {
  assertSearchResults(quantity) {
    cy.get(result).should("have.length", quantity);
  }

  assertNoResults() {
    cy.get(result).should("not.exist");
  }

  chooseProductFromResults(product) {
    cy.get(`[alt='${product}']`).click({ force: true });
  }
}
