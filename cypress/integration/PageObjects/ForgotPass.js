/// <reference types="Cypress" />

//import Browser from "./Browser"

import LoginPage from "./LoginPage"
//import LoginPage from "./LoginPage"

class ForgotPass extends LoginPage
{

    forgotLink()
    {
        const link=cy.get('td > :nth-child(2) > .register-txt > .text-underline')
        link.click()
    }
    
    forgotPasswordk(value)
    {
        cy.wait(5000)
        let mail=cy.get('#emailaddress')
        mail.click({force: true})
       mail.type(value)
        return this
    }

    Send()
    {
        const send=cy.get('.form-center > .btn > .mat-button-wrapper')
        send.click()
    }
}

export default ForgotPass