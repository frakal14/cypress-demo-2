const { onMyAccount } = require("../support/page_objects/myAccountPage")
import { faker } from '@faker-js/faker'


describe('Validate My Account functionality', () => {
    let randomAddress = faker.location.streetAddress()


    beforeEach('open homepage and login', () => {
        cy.login()

    })

    it('User is able to add a new address', () => {


        onMyAccount.clickOnAddNewAddress()
        onMyAccount.firstName.should('have.value', 'Karol')
        onMyAccount.lastName.should('have.value', 'test')
        onMyAccount.fillCompany('test')
        onMyAccount.fillAddress(randomAddress)
        onMyAccount.address.should('have.value', randomAddress)
        onMyAccount.fillCity('New York')
        onMyAccount.pickState('New York')
        onMyAccount.fillPostal('12489')
        onMyAccount.country.should('have.value', '21')
        onMyAccount.fillHomePhone('123123123')
        onMyAccount.fillMobilePhone('321321321')
        onMyAccount.fillAddressTitle('New Address')
        onMyAccount.clickOnSaveAddressBtn()
        onMyAccount.addNewAddressBtn.should('be.visible')
        onMyAccount.clickOnDeleteAddressBtn()
        onMyAccount.addNewAddressBtn.should('be.visible')
    })

    // it('User is able to reorder from my account', () => {
    //     onMyAccount.clickOnOrderHistory()
    //     onMyAccount.clickOnReorder()
        
    // })



})