export class NavigationPage{

    get signIn() {
        return cy.get('[class="login"]')
    }











    clickOnSignIn() {
        this.signIn.click()
    }





}

export const onNavigation = new NavigationPage()