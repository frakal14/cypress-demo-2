const { onSignInPage } = require("../support/page_objects/signInPage")
const { onRegisterPage } = require("../support/page_objects/registerPage")
const { onNavigation } = require("../support/page_objects/navigationPage")
import { faker } from '@faker-js/faker'
import { onMyAccount } from '../support/page_objects/myAccountPage'


describe('Validate registration form functionality and elements', () => {

    beforeEach('Open homepage', () => {
        cy.openHomePage()
        onNavigation.clickOnSignIn()
    })

    it('User is able to register with valid data', () => {
        let email = faker.internet.exampleEmail()

        onSignInPage.fillCreateEmailInput(email)
        onSignInPage.clickOnCreateAccountBtn()
        onRegisterPage.checkMrRadioBtn()
        onRegisterPage.fillFirstName('test')
        onRegisterPage.fillLastName('tester')
        onRegisterPage.email.should('have.value', email)
        onRegisterPage.fillPassword('Password123!')
        onRegisterPage.pickDateOfBirth('1', 'October', '1990')
        onRegisterPage.checkNewsletterChkbox()
        onRegisterPage.clickOnRegisterBtn()
        cy.url().should('contains', 'my-account')
    })

    




})