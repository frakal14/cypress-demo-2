const { onCart } = require("../support/page_objects/cartPage")
const { onCheckout } = require("../support/page_objects/checkoutPage")


describe('Validate checkout e2e functionality', () => {



    
    it('User is able to place an order', () => {
        cy.login()
        cy.addProductToCart()
        onCart.checkoutBtn.should('be.visible')
        onCart.clickOnProceedCheckout()
        onCheckout.clickOnProceedCheckoutAddressBtn()
        onCheckout.checkTermsChkBox()
        onCheckout.clickOnProceedCheckoutShipBtn()
        onCheckout.clickOnPayByCheck()
        onCheckout.clickOnConfirmOrderBtn()
        onCheckout.alertBox.should('exist')
    })




})