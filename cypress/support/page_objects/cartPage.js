export class CartPage{


    get checkoutBtn() {
        return cy.get('[class="icon-chevron-right right"]').eq(2)
    }



    clickOnProceedCheckout() {
        this.checkoutBtn.click({force: true})
    }




}

export const onCart = new CartPage()
