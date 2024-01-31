export class MyAccountPage {

// My account page selectors
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
get addNewAddress() {
    return cy.get('[title="Add my first address"]')
}

get orderHistory() {
    return cy.get('[title="Orders"]')
}

get myCreditSlips() {
    return cy.get('[title="Credit slips"]')
}

get myAddresses() {
    return cy.get('[title="Addresses"]')
}

get myPersonalInformation() {
    return cy.get('[title="Information"]')
}

// New Address form selectors
//---------------------------

get firstName() {
    return cy.get('#firstname')
}

get lastName() {
    return cy.get('#lastname')
}

get company() {
    return cy.get('#company')
}

get address() {
    return cy.get('#address1')
}

get city() {
    return cy.get('#city')
}

get state() {
    return cy.get('#id_state')
}

get postCode() {
    return cy.get('#postcode')
}

get postCode() {
    return cy.get('#postcode')
}

get country() {
    return cy.get('#id_country')
}

get homePhone() {
    return cy.get('#phone')
}

get mobilePhone() {
    return cy.get('#phone_mobile')
}

get addressTitle() {
    return cy.get('#alias')
}

get submitAddressBtn() {
    return cy.get('#submitAddress')
}

// My Addresses form selectors
//---------------------------

get addNewAddressBtn() {
    return cy.get('[title="Add an address"]')
}

get deleteAddressBtn() {
    return cy.get('[title="Delete"]')
}

// My account page methods
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
clickOnAddNewAddress() {
    this.addNewAddress.click()
}

clickOnDeleteAddressBtn() {
    this.deleteAddressBtn.click()
}

// New Address form methods
//---------------------------

fillCompany(text) {
    this.company.clear().type(text)
}

fillAddress(address) {
    this.address.clear().type(address)
}

fillCity(city) {
    this.city.clear().type(city)
}

pickState(state) {
    this.state.select(state)
}

fillPostal(postCode) {
    this.postCode.clear().type(postCode)
}

fillHomePhone(homePhone) {
    this.homePhone.clear().type(homePhone)
}

fillMobilePhone(mobilePhone) {
    this.mobilePhone.clear().type(mobilePhone)
}

fillAddressTitle(addressTitle) {
    this.addressTitle.clear().type(addressTitle)
}

clickOnSaveAddressBtn() {
    this.submitAddressBtn.click()
}

// My  Address form methods
//---------------------------













}

export const onMyAccount = new MyAccountPage()