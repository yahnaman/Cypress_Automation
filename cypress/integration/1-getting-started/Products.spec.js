/// <reference types="cypress" />
import home from "../../support/Page object Modle/POM"
const objhome = new home ()
describe('Test Cases for Autoamtion Test Store Website', () => {
  before(() => {
    cy.visit('https://automationteststore.com/')
  })
  it.only('Test_Case_2_a :Viewing specific product, click on the specific product and view that product', () => {
  objhome.verify_ViewProduct();
  })

  it.only('Test_Case_2_b : Verify that on the page, correct title of the product is shown (e.g.: - Tropiques Minerale Loose Bronzer)  the one which you clicked. ', () => {
   objhome.verify_Clicked_One_Product_Name();
    })

    it.only('Test_Case_3_a : Increase the QTY to 6 and click on the Add to cart button. ', () => {
        objhome.verify_Qty_AddcartButton();
   })
   it.only('Test_Case_3_b : Verify that we land on web page having title SHOPPING CART. Click on the Checkout button. ', () => {
    objhome.verify_SHOPPING_CART();
})
it.only('Test_Case_4_a :  Verify that you landed on the correct page, title “Checkout Confirmation” and click on confirm order button.  ', () => {
    objhome.verify_Checkout_CONFIRMATION();
})
it.only('Test_Case_4_b :  Verify that this message is shown after clicking “Your Order has been processed!” c) Click on the continue button.', () => {
    objhome.verify_OrderProcessed();
})
})
