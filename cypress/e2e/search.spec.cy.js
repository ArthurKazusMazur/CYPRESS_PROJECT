///<reference types = "Cypress"/>
import hat from "../fixtures/hats.json";
import { MainPage, filterWomen } from "../pages/main.page";
import { ProductPage } from "../pages/product.page";
import { SearchResults } from "../pages/search.results.page";
import { Wishlist } from "../pages/wishlist.page";

const mainPage = new MainPage();
const searchResults = new SearchResults();
const productPage = new ProductPage();
const wishlist = new Wishlist();

describe("Search feature tests", () => {
  // this will be executed before every single test in current suite
  beforeEach("Navigating to the store and closing Welcome popup", () => {
    mainPage.goToStore();
  });

  it("Search definite cap", () => {
    mainPage.searchProduct(hat.blackTrucker);
    searchResults.assertSearchResults(3);
  });

  it('Search with filtering option "WOMEN"', () => {
    mainPage.switchFilter(filterWomen);
    mainPage.searchProduct(hat.chicagoBulls);
    searchResults.assertNoResults();
  });

  it("Search an item and add it to a wishlist", () => {
    cy.intercept("POST", "https://analytics.tiktok.com/api/v2/pixel").as(
      "available"
    );

    mainPage.searchProduct(hat.brixton);
    searchResults.chooseProductFromResults(hat.brixton);

    cy.wait("@available");

    productPage.addProductToWishListButtonClick();
    wishlist.assertItemsInWishList(1);
  });
});
