describe("Tramonto Application testing", () => {
  // Visit
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("Click reject-button on modal and check if localstorage is false", () => {
    cy.get("#modal-reject", { timeout: 2000 })
      .click()
      .should(() => {
        expect(localStorage.getItem("confirm")).to.eq("false");
      });
  });

  it("Click accept-button on modal and check if localstorage is true", () => {
    cy.get("#modal-accept", { timeout: 2000 })
      .click()
      .should(() => {
        expect(localStorage.getItem("confirm")).to.eq("true");
      });
  });

  it("Testing navigation menu", () => {
    cy.get("#navigation-menu").click();
    cy.get("#link-to-startsida").click();
    cy.location("pathname").should("eq", "/");

    cy.get("#navigation-menu").click();
    cy.get("#link-to-boka-bord").click();
    cy.location("pathname").should("eq", "/booking");

    cy.get("#navigation-menu").click();
    cy.get("#link-to-kontaktsida").click();
    cy.location("pathname").should("eq", "/contact");
  });
});
