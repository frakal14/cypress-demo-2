const { onNavigation } = require("../support/page_objects/navigationPage")


describe('Verify sign in page functionality ', () => {

    beforeEach('Open homepage', () => {
        cy.openHomePage()
    })
    
    it('User is able to sign in with correct data', () => {
        onNavigation.clickOnSignIn




    })





})