///<reference types ='Cypress'/>

it("Login via API call", () => {
  cy.request({
    method: "POST",
    url: "https://alpha.unic-lab.by/api/auth/v1/login",
    body: {
      login: "User",
      password: "123456789",
    },
  })
    .its("body")
    .then((response) =>
      localStorage.setItem("accessToken", response.accessToken)
    );

  cy.visit("https://alpha.unic-lab.by/general");
  cy.url().should("contain", "/general");
});
