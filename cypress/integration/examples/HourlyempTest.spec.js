/// <reference types="cypress" />

import Hourlyemp from '../PageObjects/Hourlyemp'
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

    it('Perform hourly employee', function()
    {

      const he=new Hourlyemp()
      he.visit()
      he.signIn()
      he.fillEmail(this.data.email)
      he.fillPasword(this.data.password)
      he.submit()
      he.companyName(this.data.companyname)
      he.EIN(this.data.EIN)
      he.cAdd()
      he.cadd2(this.data.comadd2)
      he.ccity(this.data.ccity)
      he.cstate()
      he.cstate2()
      he.czip(this.data.czip)
      he.ccon()
      he.employeeInfo(this.data.ename)
      he.SSN(this.data.eSSN)
      he.empAddress()
      he.eLine(this.data.eaddress1)
      he.ecity(this.data.empcity)
      he.estate()
      he.ezip(this.data.empzip)
      he.esbt()
      he.Wage(this.data.rate)
      he.withHolding(this.data.extrawithholding)
      he.earningStatement()
      he.units(this.data.unit)
      he.Calculate()
     
    })

  })
