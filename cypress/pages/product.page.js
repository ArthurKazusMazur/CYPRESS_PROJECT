// selectors
export const addToWishListButton = ".shopping-cart-button>button";

// methods
export class ProductPage {
  addProductToWishListButtonClick() {
    cy.get(addToWishListButton).click();
  }
}
