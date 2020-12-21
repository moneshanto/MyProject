/// <reference types="Cypress" />

import Browser from '../PageObjects/Browser'

describe('Run browser', function()
{
it('invoke browser', function()
{
    const br=new Browser()
      br.visit()
   
})
})

