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

Cypress.Commands.add('openHomePage', () => {
    cy.visit('/')
})

Cypress.Commands.add('login', () =>{
    cy.visit('/')
    cy.get('[class="login"]').click()
    cy.get('[name="email"]').first().clear().type('test@example.com')
    cy.get('[data-validate="isPasswd"]').clear().type('Password123!')
    cy.get('#SubmitLogin').click()
    cy.url().should('include', 'my-account')
})

Cypress.Commands.add('addProductToCart', () => {
    cy.visit('http://www.automationpractice.pl/index.php?id_product=1&controller=product#/1-size-s/14-color-blue')
    cy.get('[id="add_to_cart"]').click()
    cy.get('[title="Proceed to checkout"]').click()





})