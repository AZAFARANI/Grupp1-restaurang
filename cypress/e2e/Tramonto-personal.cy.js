describe("Tramonto PersonalPage Test", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/login");
    cy.get("#login-email-span").type("zafarani@gmail.com");

    cy.get("#login-password-span").type("123");

    cy.get("#login-forward-button").click();
  });

  it("testing personal in personalPage", () => {
    cy.get("#personal-btn").click();
  });

  it("testing logout button", () => {
    cy.get("#personal-logout-button").click();
  });

  it("testing addBoking btn", () => {
    cy.get("#personal-bookings-button").click();
  });

  it("Testing login to personalPage", () => {
    cy.get("#personalPage-button").click().get("#single-booking-btn").click();

    cy.get("#edit-firstName-span")
      .clear()
      .then(($el) => $el[0].checkValidity())
      .should("be.false");

    cy.get("#edit-firstName-span")
      .type("elias")
      .then(($el) => $el[0].checkValidity())
      .should("be.true");

    cy.get("#edit-lastName-span")
      .clear()

      .then(($el) => $el[0].checkValidity())
      .should("be.false");

    cy.get("#edit-lastName-span")
      .type("fredriksson")
      .then(($el) => $el[0].checkValidity())
      .should("be.true");

    cy.get("#edit-email-span")
      .clear()

      .then(($el) => $el[0].checkValidity())
      .should("be.false");

    cy.get("#edit-email-span")
      .type("filip792@hotmail.com")

      .then(($el) => $el[0].checkValidity())
      .should("be.true");

    cy.get("#edit-phone-span")
      .clear()

      .then(($el) => $el[0].checkValidity())
      .should("be.false");

    cy.get("#edit-phone-span")
      .type("0707712715")

      .then(($el) => $el[0].checkValidity())
      .should("be.true");

    cy.get("#edit-allergies-span").clear().type("nötter");

    cy.get("#edit-save-button").click();
  });
  it("should delete booking", () => {
    cy.get("#personalPage-button").click().get("#single-booking-btn").click();
    cy.get("#edit-delete-button").click();
  });
});
