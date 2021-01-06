/// <reference types="cypress" />

import CalculationNc from '../PageObjects/CalculationNc'
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

    it('Perform Calculation NC', function()
    {

      const nc=new CalculationNc()
      nc.visit()
      nc.signIn()
      nc.fillEmail(this.data.email)
      nc.fillPasword(this.data.password)
      nc.submit()
      nc.companyName(this.data.companyname)
      nc.EIN(this.data.EIN)
      nc.cAdd()
      nc.cadd2(this.data.comadd2)
      nc.ccity(this.data.ccity)
      nc.cstate()
      nc.cstate2()
      nc.czip(this.data.czip)
      nc.ccon()
      nc.employeeInfo(this.data.ename)
      nc.SSN(this.data.eSSN)
      nc.empAddress()
      nc.eLine(this.data.eaddress1)
      nc.ecity(this.data.empcity)
      nc.estate()
      nc.ezip(this.data.empzip)
      nc.esbt()
      nc.Wagecal(this.data.wageamt)
      nc.Compensation()
      nc.earningStatement()
      nc.units(this.data.unit)
      nc.Calculate()
      nc.previewPaystub()
      nc.Addps()
      nc.selectCompany()
      nc.newCompany()
      nc.companyAddl1()
      nc.newLine(this.data.newl)
      
    })
})