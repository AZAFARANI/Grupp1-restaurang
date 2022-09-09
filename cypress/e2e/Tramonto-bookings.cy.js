describe("Tramonto BookingsPage Test", () => {
  //- Visit localhost:3000 on each test -//
  beforeEach(() => {
    //ARRANGE
    cy.visit("localhost:3000/bookings");
    cy.get("#modal-accept").click();
  });

  //-- Checking if validation is working on each input field --//
  it("Test validation on each input in forms  (Step-1)", () => {
    //**Testing validation of the first input**//
    //ACT
    cy.get("#form-1").within(() => {
      cy.get("#form-1-email")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.false");
      //ACT
      cy.get("#form-1-email")
        .type("filip792@hotmail.com")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.true");
    });
    //**Testing validation of the second input**//
    //ACT
    cy.get("#form-1").within(() => {
      cy.get("#form-1-number")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.false");
      //ACT
      cy.get("#form-1-number")
        .type("0707712715")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.true");
    });
    //**Testing validation of the third input**//
    //ACT
    cy.get("#form-1").within(() => {
      cy.get("#form-1-firstname")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.false");
      //ACT
      cy.get("#form-1-firstname")
        .type("Filip")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.true");
    });
    //**Testing validation of the third input**//
    //ACT
    cy.get("#form-1").within(() => {
      cy.get("#form-1-lastname")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.false");
      //ACT
      cy.get("#form-1-lastname")
        .type("Engberg")
        //ASSERT
        .then(($el) => $el[0].checkValidity())
        .should("be.true");
    });
  });

  //-- Checking functionality of next button with incorret input --//
  it("Test button validation with incorrect input (Step-1)", () => {
    //ACT
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    //ASSERT
    cy.get("#form-2").should("not.exist");
  });

  //-- Checking functionality of next button with correct input --//
  it("Test button validation with correct input (Step-1)", () => {
    //ACT
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    //ASSERT
    cy.get("#form-2").should("be.visible");
  });

  //- Checking if back button works and if form-1 got info in inputs  -//
  it("Testing back button in form 2 (Step-2)", () => {
    //ACT
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    cy.get("#form-2-back-button").click();
    //ASSERT
    cy.get("#form-1").should("be.visible");
    cy.get("#form-1", {
      timeout: 15000,
    })
      .invoke("text")
      .then((text) => {
        expect(text.length).to.be.at.least(50);
      });
  });

  //-- Checking the validation of reduce button -//
  it("Testing functionality of the reduce button (Step-2)", () => {
    //ARRANGE
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    //ACT
    cy.get("#form-2-reduce-button").click();
    //ASSERT
    cy.get("#form-2-quantity").should("have.value", "1 st");
  });

  //-- Checking the validation of reduce button -//
  it("Testing functionality of the increase button (Step-2)", () => {
    //ARRANGE
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    //ACT
    for (let n = 0; n < 91; n++) {
      cy.get("#form-2-increase-button").click();
    }
    //ASSERT
    cy.get("#form-2-quantity").should("have.value", "90 st");
  });

  //-- Checking the validation of reduce button -//
  it("Testing functionality of the next button (Step-2)", () => {
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

  //-- Checking that previous button is working -//
  it("Testing previous button  (Step-3)", () => {
    //ARRANGE
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    cy.get("#form-2-increase-button").click();
    cy.get("#form-2-forward-button").click();
    //ACT
    cy.get("#prevoius-week-button").click();
    //ASSERT
    cy.get("#form-3-week-span").contains("Vecka");
    cy.get("#form-3").should("be.visible");
  });

  //-- Checking that next button is working -//
  it("Testing next button (Step-3)", () => {
    //ARRANGE
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    cy.get("#form-2-increase-button").click();
    cy.get("#form-2-forward-button").click();
    //ACT
    cy.get("#next-week-button").click();
    //ASSERT
    cy.get("#form-3-week-span").contains("Vecka");
    cy.get("#form-3").should("be.visible");
  });

  //-- Checking that refresh button is working -//
  it("Testing refresh button (Step-3)", () => {
    //ARRANGE
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    cy.get("#form-2-increase-button").click();
    cy.get("#form-2-forward-button").click();
    //ACT
    cy.get("#form-3-refresh-button").click();
    //ASSERT
    cy.get("#form-3-week-span").contains("Vecka");
    cy.get("#form-3").should("be.visible");
  });

  //-- Checking back button in form 3 -//
  it("Testing back button in form (Step-3)", () => {
    //ARRANGE
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    cy.get("#form-2-increase-button").click();
    cy.get("#form-2-forward-button").click();
    //ACT
    cy.get("#form-3-back-button").click();
    //ASSERT
    cy.get("#form-2").should("be.visible");
    cy.get("#form-2-quantity").should("have.value", "2 st");
  });

  //-- Checking booking button for bookingsystem -//
  it("Testing take a specific time and get correct value in booking information (Step-3)", () => {
    //ARRANGE
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    cy.get("#form-2-increase-button").click();
    cy.get("#form-2-forward-button").click();
    cy.get("#next-week-button").click();
    //ACT
    cy.get("#form-3-monday-first-seating").click();
    //ASSERT
    cy.get("#form-3-chosen-time-span").contains("Klockan: 18:00");
  });

  //-- Checking next button in form 3 -//
  it("Testing take a specific time and get correct value in booking information (Step-3)", () => {
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    cy.get("#form-2-increase-button").click();
    cy.get("#form-2-forward-button").click();
    cy.get("#next-week-button").click();
    //ACT
    cy.get("#form-3-monday-first-seating").click();
    cy.get("#form-3-forward-button").click();
    //ASSERT
    cy.get("#form-3-chosen-time-span").contains("Klockan: 18:00");
    cy.get("#form-4").should("be.visible");
  });

  //-- Checking that each value is correct in form-4 (Step-4) -//
  it("Checks if all input fields in the form have the correct value (Step-4)", () => {
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    cy.get("#form-2-increase-button").click();
    cy.get("#form-2-forward-button").click();
    cy.get("#next-week-button").click();
    //ACT
    cy.get("#form-3-monday-first-seating").click();
    cy.get("#form-3-forward-button").click();
    //ASSERT
    cy.get("#form-4-day-span").contains("Måndag");
    cy.get("#form-4-time-span").contains("18:00:00");
    cy.get("#form-4-name-span").contains("Filip Engberg");
    cy.get("#form-4-email-span").contains("filip792@hotmail.com");
    cy.get("#form-4-phone-span").contains("0707712715");
    cy.get("#form-4-guestCount-span").contains("2");
    cy.get("#form-4-allergies-span").contains("Nötter");
  });

  //-- Checking back button in form 4-//
  it("Testing back button in form (Step-4)", () => {
    //ARRANGE
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    cy.get("#form-2-increase-button").click();
    cy.get("#form-2-forward-button").click();
    cy.get("#next-week-button").click();
    cy.get("#form-3-monday-first-seating").click();
    cy.get("#form-3-forward-button").click();
    //ACT
    cy.get("#form-4-back-button").click();
    //ASSERT
    cy.get("#form-3").should("be.visible");
    cy.get("#form-3-chosen-time-span").contains("Klockan: 18:00");
  });

  //-- Checking that booking button works (Step-4) -//
  it("Checks if all input fields in the form have the correct value (Step-4)", () => {
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    cy.get("#form-2-increase-button").click();
    cy.get("#form-2-forward-button").click();
    cy.get("#next-week-button").click();
    //ACT
    cy.get("#form-3-monday-first-seating").click();
    cy.get("#form-3-forward-button").click();
    cy.get("#form-4-forward-button").click();
    //ASSERT
    cy.get("#form-5").invoke("css", "overflow").should("equal", "visible");
  });

  //-- Checking that each value is correct in form-5 (Step-5) -//
  it("Checks if all input fields in the form have the correct value (Step-5)", () => {
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    cy.get("#form-2-increase-button").click();
    cy.get("#form-2-forward-button").click();
    cy.get("#next-week-button").click();
    //ACT
    cy.get("#form-3-monday-first-seating").click();
    cy.get("#form-3-forward-button").click();
    cy.get("#form-4-forward-button").click();
    //ASSERT
    cy.get("#form-5-day-span").contains("Måndag");
    cy.get("#form-5-time-span").contains("18:00:00");
    cy.get("#form-5-name-span").contains("Filip Engberg");
    cy.get("#form-5-email-span").contains("filip792@hotmail.com");
    cy.get("#form-5-phone-span").contains("0707712715");
    cy.get("#form-5-guestCount-span").contains("2");
    cy.get("#form-5-allergies-span").contains("Nötter");
  });

  //-- Checking done button in form 5-//
  it("Testing done button in form (Step-5)", () => {
    //ARRANGE
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    cy.get("#form-2-increase-button").click();
    cy.get("#form-2-forward-button").click();
    cy.get("#next-week-button").click();
    cy.get("#form-3-monday-first-seating").click();
    cy.get("#form-3-forward-button").click();
    cy.get("#form-4-forward-button").click();
    //ACT
    cy.get("#form-5-done-button").click();
    //ASSERT
    cy.location("pathname").should("eq", "/");
  });

  //-- Checking validation of bookingssystem-//
  it("Testing validation of bookingsystem (Step-1-5)", () => {
    //ACT
    //USER 1
    cy.get("#form-1-email").type("filip792@hotmail.com");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    for (let n = 0; n < 44; n++) {
      cy.get("#form-2-increase-button").click();
    }
    cy.get("#form-2-forward-button").click();
    cy.get("#next-week-button").click();
    cy.get("#form-3-tuesday-first-seating").click();
    cy.get("#form-3-forward-button").click();
    cy.get("#form-4-forward-button").click();
    cy.get("#form-5-done-button").click();
    cy.location("pathname").should("eq", "/");
    cy.visit("localhost:3000/bookings");

    //USER 2
    cy.get("#form-1-email").type("filip.engberg@medieinstitutet.se");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    for (let n = 0; n < 41; n++) {
      cy.get("#form-2-increase-button").click();
    }
    cy.get("#form-2-forward-button").click();
    cy.get("#next-week-button").click();
    cy.get("#form-3-tuesday-first-seating").click();
    cy.get("#form-3-forward-button").click();
    cy.get("#form-4-forward-button").click();
    cy.get("#form-5-done-button").click();
    cy.location("pathname").should("eq", "/");
    cy.visit("localhost:3000/bookings");
    //USER 3
    cy.get("#form-1-email").type("filip@medieinstitutet.se");
    cy.get("#form-1-number").type("0707712715");
    cy.get("#form-1-firstname").type("Filip");
    cy.get("#form-1-lastname").type("Engberg");
    cy.get("#form-1-allergies").type("Nötter");
    cy.get("#form-1-forward-button").click();
    cy.get("#form-2-increase-button").click();
    cy.get("#form-2-forward-button").click();
    cy.get("#next-week-button").click();
    //ASSERT
    cy.get("#form-3-tuesday-first-seating")
      .invoke("css", "pointer-events")
      .should("equal", "none");
  });
});
