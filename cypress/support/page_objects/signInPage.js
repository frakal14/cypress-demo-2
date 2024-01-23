export class SignInPage{

    // Sign in page selectors
    get emailInput() {
        return cy.get('[name="email"]')
    }

    get passwordInput() {
        return cy.get('[data-validate="isPasswd"]')
    }

    get forgotPassword() {
        return cy.contains('Forgot your password?')
    }

    get signInBtn() {
        return cy.get('#id="SubmitLogin"')
    }
    // Create account selectors
    get emailRegisterInput() {
        return cy.get('[id="email_create"]')
    }

    get createAccountBtn() {
        return cy.get('#SubmitCreate')
    }

    //------------------------------------------------------------------------------------------------------------------------------------------------------------ 
    // Sign in page methods

    fillSignInData(email, password) {
        this.emailInput.clear().type(email)
        this.passwordInput.clear().type(password)
    }

    clickOnForgotPassword() {
        this.forgotPassword.click()
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


}

export const onSignInPage = new SignInPage()