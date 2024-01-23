const { onNavigation } = require("../support/page_objects/navigationPage")
const { onSignInPage } = require("../support/page_objects/signInPage")
import  loginData  from "../fixtures/loginData.json"


describe('Verify sign in page functionality ', () => {

    beforeEach('Open homepage', () => {
        cy.openHomePage()
        onNavigation.clickOnSignIn()
    })
    
    it('User is able to sign in with correct data', () => {
        onSignInPage.fillSignInData(loginData.email, loginData.password)
        onSignInPage.emailInput.should('have.value', loginData.email)
        onSignInPage.passwordInput.should('have.value',loginData.password)
        onSignInPage.clickOnSignIn()
        cy.url().should('include', 'my-account')
    })

    it('Sign in form validation should trigger upon incorrect data', () => {
        onSignInPage.fillSignInData(loginData.invalidEMail, loginData.password)
        onSignInPage.clickOnSignIn()
        onSignInPage.redAlertBox('Invalid email address.')
        onSignInPage.fillSignInData(loginData.email, loginData.invalidPassword)
        onSignInPage.clickOnSignIn()
        onSignInPage.redAlertBox('Invalid password.')
        onSignInPage.fillSignInData(loginData.blankEmail, loginData.password)
        onSignInPage.clickOnSignIn()
        onSignInPage.redAlertBox('An email address required.')
    })

    it.only('User is able to retrieve password with filled in data', () => {
        onSignInPage.clickOnForgotPassword()
        onSignInPage.clickOnForgotPasswordBtn()
        onSignInPage.redAlertBox('Invalid email address.')
        onSignInPage.fillForgotPasswordEmail(loginData.email)
        onSignInPage.clickOnForgotPasswordBtn()
        onSignInPage.greenAlertBox(`A confirmation email has been sent to your address: ${loginData.email}`)

    })





})