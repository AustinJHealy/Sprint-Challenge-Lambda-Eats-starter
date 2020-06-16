describe("Test Name Input", () => {
  it("types into input field", () => {
    cy.visit("http://localhost:3000/pizza")
      .get('input[name="name"]')
      .type("Austin Healy")
      .should("have.value", "Austin Healy");
  });
});
describe("Test Checkboxes", () => {
  it("Checks multiple boxes", () => {
    cy.visit("http://localhost:3000/pizza")
      .get('input[name="pepperoni"]')
      .check()
      .get('input[name="sausage"]')
      .check()
      .get('input[name="ham"]')
      .check();
  });
});

describe("Test Submit Button", () => {
  it("Tests if submit button works", () => {
    cy.visit("http://localhost:3000/pizza").get(".submit").click();
  });
});
