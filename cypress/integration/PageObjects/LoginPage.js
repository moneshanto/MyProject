/// <reference types="Cypress" />

import Browser from "./Browser"

class LoginPage extends Browser

{

    signIn()
    {
       const butone=cy.get('[id=btnSignIn]')
       butone.click()
    }
    fillEmail(value)
    {
        const field=cy.get('[id=emailaddress]')
        field.clear()
        field.type(value)
        return this
    }

    fillPasword(value)
    {
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