describe("Tramonto BookingsPage Test", () => {
  //- Visit localhost:3000 on each test -//
  beforeEach(() => {
    //ARRANGE
    cy.visit("localhost:3000/booking");
    cy.get("#modal-accept").click();
  });

  //-- Checking if validation is working on each input field --//
  it("Test validation in the form step 1", () => {
    //**Testing validation of the first input**//
    //ACT
    cy.get("#form").within(() => {
      cy.get("#email")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.false");
      //ACT
      cy.get("#email")
        .type("filip792@hotmail.com")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.true");
    });

    //**Testing validation of the second input**//
    //ACT
    cy.get("#form").within(() => {
      cy.get("#number")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.false");
      //ACT
      cy.get("#number")
        .type("0707712715")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.true");
    });

    //**Testing validation of the third input**//
    //ACT
    cy.get("#form").within(() => {
      cy.get("#firstname")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.false");
      //ACT
      cy.get("#firstname")
        .type("Filip")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.true");
    });

    //**Testing validation of the third input**//
    //ACT
    cy.get("#form").within(() => {
      cy.get("#lastname")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.false");
      //ACT
      cy.get("#lastname")
        .type("Engberg")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.true");
    });
  });

  it("Testing the functionality of the next button in step 1", () => {
    //ACT
    cy.get("#email").type("filip792@hotmail.com");
    cy.get("#number").type("0707712715");
    cy.get("#firstname").type("Filip");
    cy.get("#lastname").type("Engberg");
    cy.get("#allergies").type("Nötter");
    cy.get("#form1-next-button").click();
    //ASSERT
    cy.get("#form-2").should("be.visible");
  });

  it("Testing the functionality of all buttons in step 2 ", () => {
    //ACT
    cy.get("#email").type("filip792@hotmail.com");
    cy.get("#number").type("0707712715");
    cy.get("#firstname").type("Filip");
    cy.get("#lastname").type("Engberg");
    cy.get("#allergies").type("Nötter");
    cy.get("#form1-next-button").click();
    //ASSERT
    cy.get("#form-2").should("be.visible");

    //ACT
  });
});
