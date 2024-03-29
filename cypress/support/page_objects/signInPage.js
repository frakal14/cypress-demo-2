export class SignInPage {
    
    //------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Sign in page selectors
    get emailInput() {
        return cy.get('[name="email"]').first()
    }

    get passwordInput() {
        return cy.get('[data-validate="isPasswd"]')
    }

    get forgotPassword() {
        return cy.get('[title="Recover your forgotten password"]')
    }

    get signInBtn() {
        return cy.get('#SubmitLogin')
    }
    // Create account selectors
    get emailRegisterInput() {
        return cy.get('#email_create')
    }

    get createAccountBtn() {
        return cy.get('#SubmitCreate')
    }

    get forgotPasswordEmail() {
        return cy.get('[name="email"]').first()
    }

    get forgotPasswordBtn() {
        return cy.contains('Retrieve Password')
    }


    //------------------------------------------------------------------------------------------------------------------------------------------------------------ 
    // Sign in page methods

    fillSignInData(email, password) {
        this.emailInput.clear().type(email)
        this.passwordInput.clear().type(password)
    }

    clickOnForgotPassword() {
        this.forgotPassword.click({force: true})
    }

    clickOnSignIn() {
        this.signInBtn.click()
    }

    fillCreateEmailInput(email) {
        this.emailRegisterInput.clear().type(email)
    }

    clickOnCreateAccountBtn() {
        this.createAccountBtn.click()
    }

    redAlertBox(text) {
        cy.on('window:alert', (str) => {
            expect(str).to.equal(text)
        }) 
    }

    greenAlertBox(text) {
        cy.on('window:alert', (str) => {
            expect(str).to.equal(text)
        }) 
    }

    

    fillForgotPasswordEmail(email) {
        this.forgotPasswordEmail.clear().type(email)
    }

    clickOnForgotPasswordBtn() {
        this.forgotPasswordBtn.click()
    }

}

export const onSignInPage = new SignInPage()