describe("Tramonto Landingpage Test", () => {
  //- Visit localhost:3000 on each test -//
  beforeEach(() => {
    //ARRANGE
    cy.visit("localhost:3000");
  });

  //- Trying to click accept on the GDPR-modal and see if localstorage becomes true -//
  it("Testing reject-button on modal and check if localstorage is false", () => {
    //ACT
    cy.get("#modal-reject")
      .click()
      //ASSERT
      .should(() => {
        expect(localStorage.getItem("confirm")).to.eq("false");
      });
  });

  //- Trying to click accept on the GDPR-modal and see if localstorage becomes false -//
  it("Testing accept-button on modal and check if localstorage is true", () => {
    //ACT
    cy.get("#modal-accept")
      .click()
      //ASSERT
      .should(() => {
        expect(localStorage.getItem("confirm")).to.eq("true");
      });
  });
  //- Tests all links on the entire navigation menu -//
  it("Testing navigation menu", () => {
    // ACT
    cy.get("#navigation-menu").click();
    cy.get("#link-to-startsida").click();
    //ASSERT
    cy.location("pathname").should("eq", "/");

    //ACT
    cy.get("#navigation-menu").click();
    cy.get("#link-to-boka-bord").click();
    //ASSERT
    cy.location("pathname").should("eq", "/bookings");

    //ACT
    cy.get("#navigation-menu").click();
    cy.get("#link-to-kontaktsida").click();
    //ASSERT
    cy.location("pathname").should("eq", "/contact");
  });

  //- Testing the up and down buttons and their function -//
  it("Testing down and up buttons", () => {
    //ACT
    cy.get("#page-down").click();
    //ASSERT
    cy.get("#menuLandning").should("be.visible");

    //ACT
    cy.get("#page-up").click();
    //ASSERT
    cy.get("#menuLandning").should("be.visible");
  });

  //-- Testing contact link in footer -//
  it("Testing contact link in footer", () => {
    //ACT
    cy.get("#footer-contact-link").click();
    //ASSERT
    cy.location("pathname").should("eq", "/contact");
  });

  //-- Testing booking button -//
  it("Testing booking button", () => {
    //ACT
    cy.get("#landing-booking-button").click();
    //ASSERT
    cy.location("pathname").should("eq", "/bookings");
  });
});
