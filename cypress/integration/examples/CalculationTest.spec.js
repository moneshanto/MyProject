/// <reference types="cypress" />

import Calculation from '../PageObjects/Calculation'
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

    it('Perform Calculation SC', function()
    {

      const cal=new Calculation()
      cal.visit()
      cal.signIn()
      cal.fillEmail(this.data.email)
      cal.fillPasword(this.data.password)
      cal.submit()
      cal.companyName(this.data.companyname)
      cal.EIN(this.data.EIN)
      cal.cAdd()
      cal.cadd2(this.data.comadd2)
      cal.ccity(this.data.ccity)
      cal.cstate()
      cal.cstate2()
      cal.czip(this.data.czip)
      cal.ccon()
      cal.employeeInfo(this.data.ename)
      cal.SSN(this.data.eSSN)
      cal.empAddress()
      cal.eLine(this.data.eaddress1)
      cal.ecity(this.data.empcity)
      cal.estate()
      cal.ezip(this.data.empzip)
      cal.esbt()
      cal.Wagecal(this.data.wageamt)
      cal.Compensation()
      cal.earningStatement()
      cal.units(this.data.unit)
      cal.Calculate()
      cal.previewPaystub()
      
      
    })
})