describe("test index", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("HOST_URL"));
  });

  describe("Index Page", () => {
    it("should pass", () => {
      cy.document().its("contentType").should("eq", "text/html");
      cy.contains("Home page");
    });

    it("should render login button", () => {
      cy.findByRole("button", { name: "Login" }).should("exist");
    });
  });
});
