/// <reference types="cypress" />
import home from "../../support/Page object Modle/POM"
const objhome = new home ()
describe('Test Cases for Autoamtion Test Store Website', () => {
  before(() => {
    cy.visit('https://automationteststore.com/')
  })

  it('Test_Case_1_a : verify that User should be able to login the website successfully with correct username and password also and click on any one of the categories.', () => {
  objhome.verify_validlogin();
  })

  it('Test_Case_1_b :  Verify that user lands on specific category page by clicking it.', () => {
    objhome.verify_Category_Menu();
    })
})
