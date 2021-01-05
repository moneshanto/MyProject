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
      se.previewPaystub()
      se.view()
      se.payStub()
      se.close()
      se.CompleteOrder()
      se.checkBox()
      se.Accept()
      se.cardName(this.data.cardnam)
      se.cardNumber(this.data.cardnum)
      se.month(this.data.cardmon)
      se.Cvv(this.data.cardcv)
      se.cardLine(this.data.carda)
      se.cardcity(this.data.cardc)
      se.cardstate()
      se.cardzip(this.data.cardz)
      se.confirm()
      se.authorize()
      se.sendMail()
      se.email(this.data.emile)
      se.saveMail()
      se.sendeMail()
      se.downloadps()
      se.viewPystub()
      se.closeStub()
      se.Dashboard()
     
    })

  })
