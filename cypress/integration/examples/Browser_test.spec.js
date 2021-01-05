/// <reference types="Cypress" />

//test case for browser page
import Browser from '../PageObjects/Browser'

describe('Run browser', function()
{
it('invoke browser', function()
{
    const br=new Browser()
      br.visit()
   
})
})

