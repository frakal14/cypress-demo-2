
export class RegisterPage{


    // Register page selectors
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------
    get mrRadioBtn() {
        return cy.get('#id_gender1')
    }

    get firstName() {
        return cy.get('#customer_firstname')
    }

    get lastName() {
        return cy.get('#customer_lastname')
    }

    get email() {
        return cy.get('#email').first()
    }

    get password() {
        return cy.get('#passwd')
    }

    get password() {
        return cy.get('#passwd')
    }

    get dobDay() {
        return cy.get('#days')
    }

    get dobMonth() {
        return cy.get('#months')
    }

    get dobYear() {
        return cy.get('#years')
    }

    get newsletterCheckBox() {
        return cy.get('#newsletter')
    }

    get registerBtn() {
        return cy.get('#submitAccount')
    }

    // Register page selectors
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------

    checkMrRadioBtn() {
        this.mrRadioBtn.check()
    }

    fillFirstName(firstname) {
        this.firstName.clear().type(firstname)
    }

    fillLastName(lastname) {
        this.lastName.clear().type(lastname)
    }

    fillEmail(email) {
        this.email.clear().type(email)
    }

    pickDateOfBirth(day, month, year) {
        this.dobDay.select(day)
        this.dobMonth.select(month)
        this.dobYear.select(year)
    }

    fillPassword(password) {
        this.password.clear().type(password)
    }

    checkNewsletterChkbox() {
        this.newsletterCheckBox.check()
    }

    clickOnRegisterBtn() {
        this.registerBtn.click()
    }

















}

export const onRegisterPage = new RegisterPage()