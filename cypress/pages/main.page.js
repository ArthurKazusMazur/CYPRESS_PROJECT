// selectors
export const closeWelcomePopupButton = ".close-container > button";
export const searchInputField = '[data-testid="search-bar-input-field"]';
export const searchButton = '[data-testid="search-button"]';
export const filterWomen = '[data-testid="department-woman"]';
export const wishlistButton = '[data-testid="header-shopping-list-button"]';
// methods
export class MainPage {
  goToStore() {
    cy.visit("/");
    cy.get(closeWelcomePopupButton).click();
  }

  searchProduct(product) {
    cy.get(searchInputField)
      .first()
      .clear()
      .type(product + `{enter}`);
    cy.get(searchButton).first().click();
  }

  switchFilter(filter) {
    cy.get(filter).click();
  }

  openWishlist() {
    cy.get(wishlistButton).click();
  }
}
