/// <reference types="cypress" />

describe("poke app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000/");
  });

  it("begin and go btns", () => {
    cy.visit("http://localhost:3000/intro");

    // cy.findByRole("begin-role-btn", { name: /begin/i }).click();
    // cy.get(".poke-intro-btn", { name: /begin/i }).click(); //get by className
    // cy.findByTestId("begin-btn-id", { name: /begin/i }).click();
    cy.get(".pokeball-wrapper").trigger("mouseover");
    cy.findByLabelText("go-btn-label", { name: /go/i }).click(); //working
    // cy.findByLabelText("begin-btn-label", { name: /begin/i }).click();//working
  });
  it("pokemon component open modal and close btn test", () => {
    cy.visit("http://localhost:3000/home");
    cy.findByRole("pokemon-btn", {
      // name: /# 2 venusaur type : grass/i,
    }).click();

    //the follwing targets the close btn on the modal
    cy.get(
      "body > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > button > span > span > svg"
    ).click();
    //we could also use closeIcon Modal prop and give a className or id to the Icon wrapper
    // cy.get(".poke-navbar-container-btn").trigger("mouseover");
    // cy.get(".poke-navbar-container-btn").trigger("click");
    // cy.get("body").trigger("scroll");

    cy.get("#root > div").trigger("scroll", { force: true }); //the body

    // cy.findByRole("button", {
    //   name: /# 26 pikachu pikachu type : electric/i,
    // }).click();
  });
});

// cy.get('tbody>tr').eq(0)    // Yield first 'tr' in 'tbody'
// cy.get('ul>li').eq(4)       // Yield fifth 'li' in 'ul'
