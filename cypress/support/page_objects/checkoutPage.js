export class CheckoutPage{


    get proceedCheckoutAddressBtn() {
        return cy.get('[name="processAddress"]')
    }

    get termsCheckbox() {
        return cy.get('[name="cgv"]')
    }

    get proceedCheckoutShipBtn() {
        return cy.get('[name="processCarrier"]')
    }

    get payByCheck() {
        return cy.get('[title="Pay by check."]')
    }

    get confirmOrderBtn() {
        return cy.get('[class="button btn btn-default button-medium"]')
    }
    
    get alertBox() {
        return cy.get('[class="alert alert-success"]')
    }

    clickOnProceedCheckoutAddressBtn() {
        this.proceedCheckoutAddressBtn.click({timeout: 10000})
    }


    checkTermsChkBox() {
        this.termsCheckbox.check()
    }

    clickOnPayByCheck() {
        this.payByCheck.click()
    }

    clickOnConfirmOrderBtn() {
        this.confirmOrderBtn.click()
    }

    clickOnProceedCheckoutShipBtn() {
        this.proceedCheckoutShipBtn.click()
    }
    




}

export const onCheckout = new CheckoutPage()