const { onNavigation } = require("../support/page_objects/navigationPage")
const { onSignInPage } = require("../support/page_objects/signInPage")
import  loginData  from "../fixtures/loginData.json"


describe('Verify sign in page functionality ', () => {

    beforeEach('Open homepage', () => {
        cy.openHomePage()
    })
    
    it('User is able to sign in with correct data', () => {
        onNavigation.clickOnSignIn()
        onSignInPage.fillSignInData(loginData.email, loginData.password)
        onSignInPage.emailInput.should('have.value', loginData.email)
        onSignInPage.passwordInput.should('have.value',loginData.password)
        onSignInPage.clickOnSignIn()
        cy.url().should('include', 'my-account')
    })





})