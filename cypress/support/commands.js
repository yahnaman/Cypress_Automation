// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('https://automationteststore.com/')
        cy.get('#customer_menu_top > li > a').should('have.text','Login or register').click()// Login Button click 
        cy.get('#loginFrm_loginname').type(username).should('have.value',username)//  Login Name
        cy.wait(1000)
        cy.get('#loginFrm_password').type(password).should('have.value',password) //  // Password
        cy.wait(1000)
        cy.get('#loginFrm > fieldset > .btn').should('contain','Login').click() // Login submit button
        cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').should('have.text','Welcome back test') //when Login success
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click() // click on   Apparel & accessories
        cy.get('.maintext').should('have.text','Apparel & accessories')
        cy.wait(1000)
    })
  })