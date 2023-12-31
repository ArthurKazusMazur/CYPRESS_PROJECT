// selectors
export const wishlistButton = '[data-testid="header-shopping-list-button"]';
export const listIsEmptyTextContainer =
  '[data-testid="header-shopping-list-empty"]';
export const itemsInWishListTextContainer =
  '[data-testid="header-shopping-list-empty"] .subtitle';

// methods
export class Wishlist {
  assertItemsInWishList(product, quantity) {
    cy.get(wishlistButton).click();
    cy.get(listIsEmptyTextContainer).should("not.exist");
    cy.get(itemsInWishListTextContainer).should("not.exist");
    cy.get(product).should("have.length", quantity);
  }
}
