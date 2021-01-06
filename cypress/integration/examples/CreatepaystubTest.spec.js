/// <reference types="Cypress" />

import Createpaystub from '../PageObjects/Createpaystub'

describe('Create Paystubs', function()
{
    before(function() 
    {
      cy.fixture('example').then(function(data) 
      {
        this.data = data;
      })
    })

    const com = new Createpaystub()

    it('Hourly employee without addon', function()
    {
        
        com.Browser()
        com.sinIn()
        com.emAddress("monesh+cypress23@spanllc.com")
        com.pWord("Span@123")
        com.signinbtn()
        com.companyName(this.data.companyname)
        com.EIN(this.data.EIN)
        com.companyAddress()
        com.caddressclk(this.data.comadd2)
        com.companyCity(this.data.ccity)
        com.companyState()
        com.companystate2()
        com.companyzip(this.data.czip)
        com.companycon()
        com.employeeInfo(this.data.ename)
        com.SSN(this.data.eSSN)
        com.empAddress()
        com.eLine(this.data.eaddress1)
        com.ecity(this.data.empcity)
        com.estate()
        com.ezip(this.data.empzip)
        com.esbt()
        com.Wage(this.data.rate)
        com.withHolding(this.data.extrawithholding)
        com.earningStatement()
        com.units(this.data.unit)
        com.Calculate()
        com.previewPaystub()
        com.view()
        com.payStub()
        com.close()
        com.CompleteOrder()
        com.checkBox()
        com.Accept()
        com.cardName(this.data.cardnam)
        com.cardNumber(this.data.cardnum)
        com.month(this.data.cardmon)
        com.Cvv(this.data.cardcv)
        com.cardLine(this.data.carda)
        com.cardcity(this.data.cardc)
        com.cardstate()
        com.cardzip(this.data.cardz)
        com.confirm()
        com.authorize()
        com.sendMail()
        com.email(this.data.emile)
        com.saveMail()
        com.sendeMail()
        com.downloadps()
        com.viewPystub()
        com.closeStub()
        com.Dashboard()
        com.logOut()

    })

    it('salaried employee without addon', function()
    {
        
        com.sinIn()
        com.emAddress("monesh+cypress24@spanllc.com")
        com.pWord("Span@123")
        com.signinbtn()
        com.companyName(this.data.companyname)
        com.EIN(this.data.EIN)
    })


        
})