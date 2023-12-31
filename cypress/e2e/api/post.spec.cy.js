///<reference types="Cypress"/>
import { expect } from "chai";
import { MainPage } from "../../pages/main.page";
import { ApiData } from "../../data/api.data";
import { Wishlist } from "../../pages/wishlist.page";
import { ListData } from "../../data/wishlist.data";

const mainPage = new MainPage();
const wishlist = new Wishlist();
it("Adding item to a wishlist via api request", () => {
  //   api level sending request
  cy.request("POST", ApiData.endpoints.wishlistEndPoint, ApiData.brixton).then(
    (response) => {
      expect(response.status).to.eq(200);
      expect(response.body.items[0].brand.name).to.eq("Brixton");
    }
  );

  // gui level cheking the result
  mainPage.goToStore();
  wishlist.assertItemsInWishList(ListData.addToWishListAPI, 1);
});
