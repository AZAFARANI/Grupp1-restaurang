describe("Tramonto BookingsPage Test", () => {
  //- Visit localhost:3000 on each test -//
  beforeEach(() => {
    //ARRANGE
    cy.visit("localhost:3000/bookings");
    cy.get("#modal-accept").click();
  });

  // //-- Checking if validation is working on each input field --//
  // it("Test validation on each input in forms  (Step-1)", () => {
  //   //**Testing validation of the first input**//
  //   //ACT
  //   cy.get("#form-1").within(() => {
  //     cy.get("#form-1-email")
  //       //ASSERT
  //       .then(($el) => $el[0].checkValidity())
  //       .should("be.false");
  //     //ACT
  //     cy.get("#form-1-email")
  //       .type("filip792@hotmail.com")
  //       //ASSERT
  //       .then(($el) => $el[0].checkValidity())
  //       .should("be.true");
  //   });
  //   //**Testing validation of the second input**//
  //   //ACT
  //   cy.get("#form-1").within(() => {
  //     cy.get("#form-1-number")
  //       //ASSERT
  //       .then(($el) => $el[0].checkValidity())
  //       .should("be.false");
  //     //ACT
  //     cy.get("#form-1-number")
  //       .type("0707712715")
  //       //ASSERT
  //       .then(($el) => $el[0].checkValidity())
  //       .should("be.true");
  //   });
  //   //**Testing validation of the third input**//
  //   //ACT
  //   cy.get("#form-1").within(() => {
  //     cy.get("#form-1-firstname")
  //       //ASSERT
  //       .then(($el) => $el[0].checkValidity())
  //       .should("be.false");
  //     //ACT
  //     cy.get("#form-1-firstname")
  //       .type("Filip")
  //       //ASSERT
  //       .then(($el) => $el[0].checkValidity())
  //       .should("be.true");
  //   });
  //   //**Testing validation of the third input**//
  //   //ACT
  //   cy.get("#form-1").within(() => {
  //     cy.get("#form-1-lastname")
  //       //ASSERT
  //       .then(($el) => $el[0].checkValidity())
  //       .should("be.false");
  //     //ACT
  //     cy.get("#form-1-lastname")
  //       .type("Engberg")
  //       //ASSERT
  //       .then(($el) => $el[0].checkValidity())
  //       .should("be.true");
  //   });
  // });

  // //-- Checking functionality of next button with incorret input --//
  // it("Test button validation with incorrect input (Step-1)", () => {
  //   //ACT
  //   cy.get("#form-1-email").type("filip792@hotmail.com");
  //   cy.get("#form-1-number").type("0707712715");
  //   cy.get("#form-1-firstname").type("Filip");
  //   cy.get("#form-1-lastname")
  //     .then(($el) => $el[0].checkValidity())
  //     .should("be.false");
  //   cy.get("#form-1-allergies").type("Nötter");
  //   cy.get("#form-1-forward-button").click();
  //   //ASSERT
  //   cy.get("#form-2").should("not.exist");
  // });

  // //-- Checking functionality of next button with correct input --//
  // it("Test button validation with correct input (Step-1)", () => {
  //   //ACT
  //   cy.get("#form-1-email").type("filip792@hotmail.com");
  //   cy.get("#form-1-number").type("0707712715");
  //   cy.get("#form-1-firstname").type("Filip");
  //   cy.get("#form-1-lastname").type("Engberg");
  //   cy.get("#form-1-allergies").type("Nötter");
  //   cy.get("#form-1-forward-button").click();
  //   //ASSERT
  //   cy.get("#form-2").should("be.visible");
  // });

  // //- Checking if back button works and if form-1 got info in inputs  -//
  // it("Testing back button in form 2 (Step-2)", () => {
  //   //ACT
  //   cy.get("#form-1-email").type("filip792@hotmail.com");
  //   cy.get("#form-1-number").type("0707712715");
  //   cy.get("#form-1-firstname").type("Filip");
  //   cy.get("#form-1-lastname").type("Engberg");
  //   cy.get("#form-1-allergies").type("Nötter");
  //   cy.get("#form-1-forward-button").click();
  //   cy.get("#form-2-back-button").click();
  //   //ASSERT
  //   cy.get("#form-1").should("be.visible");
  //   cy.get("#form-1", {
  //     timeout: 15000,
  //   })
  //     .invoke("text")
  //     .then((text) => {
  //       expect(text.length).to.be.at.least(50);
  //     });
  // });

  // //-- Checking the validation of reduce button -//
  // it("Testing functionality of the reduce button (Step-2)", () => {
  //   //ARRANGE
  //   cy.get("#form-1-email").type("filip792@hotmail.com");
  //   cy.get("#form-1-number").type("0707712715");
  //   cy.get("#form-1-firstname").type("Filip");
  //   cy.get("#form-1-lastname").type("Engberg");
  //   cy.get("#form-1-allergies").type("Nötter");
  //   cy.get("#form-1-forward-button").click();
  //   //ACT
  //   cy.get("#form-2-reduce-button").click();
  //   //ASSERT
  //   cy.get("#form-2-quantity").should("have.value", "1 st");
  // });

  // //-- Checking the validation of reduce button -//
  // it("Testing functionality of the increase button (Step-2)", () => {
  //   //ARRANGE
  //   cy.get("#form-1-email").type("filip792@hotmail.com");
  //   cy.get("#form-1-number").type("0707712715");
  //   cy.get("#form-1-firstname").type("Filip");
  //   cy.get("#form-1-lastname").type("Engberg");
  //   cy.get("#form-1-allergies").type("Nötter");
  //   cy.get("#form-1-forward-button").click();
  //   //ACT
  //   for (let n = 0; n < 91; n++) {
  //     cy.get("#form-2-increase-button").click();
  //   }
  //   //ASSERT
  //   cy.get("#form-2-quantity").should("have.value", "90 st");
  // });

  // //-- Checking the validation of reduce button -//
  // it("Testing functionality of the next button (Step-2)", () => {
  //   //ARRANGE
  //   cy.get("#form-1-email").type("filip792@hotmail.com");
  //   cy.get("#form-1-number").type("0707712715");
  //   cy.get("#form-1-firstname").type("Filip");
  //   cy.get("#form-1-lastname").type("Engberg");
  //   cy.get("#form-1-allergies").type("Nötter");
  //   cy.get("#form-1-forward-button").click();
  //   //ACT
  //   cy.get("#form-2-forward-button").click();
  //   //ASSERT
  //   cy.get("#form-3").should("be.visible");
  // });

  //-- Checking the validation of reduce button -//

  it("Testing week  (Step-3)", () => {
    //ARRANGE
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    //ACT
    cy.get("#form-2-forward-button").click();
    //ASSERT
    cy.get("#form-3").should("be.visible");
  });
});
