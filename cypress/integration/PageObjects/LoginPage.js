/// <reference types="Cypress" />

import Browser from "./Browser"

class LoginPage extends Browser

{

    signIn()
    {
        cy.wait(5000)
       const butone=cy.get('[id=btnSignIn]')
       butone.click()
    }
    fillEmail(value)
    {
        cy.wait(5000)
        const field=cy.get('[id=emailaddress]')
        field.clear()
        field.type(value)
        return this
    }

    fillPasword(value)
    {
        cy.wait(5000)
        const field=cy.get('[id=password]')
        field.clear()
        field.type(value)
        return this
    }

    submit()
    {
       const button=cy.get('.mat-button-wrapper > mat-label')
       button.click()

    }
}
export default LoginPage