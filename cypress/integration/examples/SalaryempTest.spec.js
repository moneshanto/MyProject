/// <reference types="cypress" />

import Salaryemp from '../PageObjects/Salaryemp';

    describe('Salary employee', function()
{
    before(function() 
    {
      cy.fixture('example').then(function(data) 
      {
        this.data = data;
     
      }
      )

    })

    it('Perform salary employee', function()
    {

      const se=new Salaryemp()
      se.visit()
      se.signIn()
      se.fillEmail(this.data.email)
      se.fillPasword(this.data.password)
      se.submit()
      se.companyName(this.data.companyname)
      se.EIN(this.data.EIN)
      se.cAdd()
      se.cadd2(this.data.comadd2)
      se.ccity(this.data.ccity)
      se.cstate()
      se.cstate2()
      se.czip(this.data.czip)
      se.ccon()
      se.eSalaried()
      se.employeeInfo(this.data.ename)
      se.SSN(this.data.eSSN)
      se.empAddress()
      se.eLine(this.data.eaddress1)
      se.ecity(this.data.empcity)
      se.estate()
      se.ezip(this.data.empzip)
      se.esbt()
      se.Wage(this.data.salary)
      se.withHolding(this.data.extrawithholding)
      se.earningStatement()
      se.Calculate()
     
    })

  })
