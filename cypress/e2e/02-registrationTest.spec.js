const { onSignInPage } = require("../support/page_objects/signInPage")
const { onRegisterPage } = require("../support/page_objects/registerPage")
const { onNavigation } = require("../support/page_objects/navigationPage")


describe('Validate registration form functionality and elements', () => {

    beforeEach('Open homepage', () => {
        cy.openHomePage()
        onNavigation.clickOnSignIn()
    })

    it('User is able to register with valid data', () => {
        onSignInPage.fillCreateEmailInput('test@testqwerty1.com')
        onSignInPage.clickOnCreateAccountBtn()
        onRegisterPage.checkMrRadioBtn()
        onRegisterPage.fillFirstName('test')
        onRegisterPage.fillLastName('tester')
        onRegisterPage.email.should('have.value', 'test@testqwerty1.com')
        onRegisterPage.fillPassword('Password123!')
        onRegisterPage.pickDateOfBirth('1', 'October', '1990')
        onRegisterPage.checkNewsletterChkbox()
        onRegisterPage.clickOnRegisterBtn()
        cy.url().should('contains', 'my-account')
    })






})