/// <reference types="Cypress" />

import LoginPage from '../PageObjects/LoginPage'

    
describe('Test suite', function()
{
    before(function() 
    {
      cy.fixture('example').then(function(data) 
      {
        this.data = data;
      })
    })

    it('valida Login Test', function()
    {

      const lp=new LoginPage()
      lp.visit()
      lp.signIn()
      lp.fillEmail(this.data.email)
      lp.fillPasword(this.data.password)
      lp.submit()
    })
    
    it('valida Login Test', function()
    {
    cy.get('#mat-input-5').type('Ceeli')
})
})