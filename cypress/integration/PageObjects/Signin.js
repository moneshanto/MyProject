/// <reference types="cypress" />

class Signin
{
    Browser()
    {
        
        cy.visit('https://secureeps.payrollspan.net/')
    }

    sinIn()
    {
        cy.wait(5000)
        const btn1=cy.get('#btnSignIn')
        btn1.click()
    }

    emAddress(value)
    {
        cy.wait(5000)
        const ea=cy.get('#emailaddress')
        ea.type(value)
        return this
    }

    pWord(value)
    {
        cy.wait(5000)
        const pw=cy.get('#password')
        pw.type(value)
        return this
    }

    signinbtn()
    {
        cy.wait(5000)
        const sbtn=cy.get('.mat-button-wrapper > mat-label')
        sbtn.click()
    }
}

export default Signin