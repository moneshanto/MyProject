/// <reference types="cypress" />

import ForgotPass from '../PageObjects/ForgotPass'

describe('Send forgot password', function()
{
    before(function() 
    {
      cy.fixture('example').then(function(data) 
      {
        this.data = data;
     
      }
      )
    })


it('perform the forgot password', function()
{
    const fp=new ForgotPass()
    fp.visit()
    fp.signIn()
    fp.forgotLink()
    fp.forgotPasswordk(this.data.email)
    fp.Send()

})
    })
