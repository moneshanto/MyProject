/// <reference types="cypress" />
import Contractor from '../PageObjects/Contractor';

    describe('contractor payroll', function()
{
    before(function() 
    {
      cy.fixture('example').then(function(data) 
      {
        this.data = data;
     
      }
      )

    })

    it('Perform contractor payroll', function()
    {

      const con=new Contractor()
      con.visit()
      con.signIn()
      con.fillEmail(this.data.email)
      con.fillPasword(this.data.password)
      con.submit()
      con.companyName(this.data.companyname)
      con.EIN(this.data.EIN)
      con.cAdd()
      con.cadd2(this.data.comadd2)
      con.ccity(this.data.ccity)
      con.cstate()
      con.cstate2()
      con.czip(this.data.czip)
      con.ccon()
      con.radioBUtton()
      con.contractorName(this.data.contname)
      con.contractorId(this.data.contid)
      con.contractorSSN(this.data.contssn)
      con.empAddress()
      con.eLine(this.data.eaddress1)
      con.ecity(this.data.empcity)
      con.estate()
      con.ezip(this.data.empzip)
      con.esbt()
      con.earningStatement()
      con.earnings(this.data.amt)
      con.previewPaystub()
      con.view()
      con.payStub()
      con.close()
      con.CompleteOrder()
      con.checkBox()
      con.Accept()
      con.cardName(this.data.cardnam)
      con.cardNumber(this.data.cardnum)
      con.month(this.data.cardmon)
      con.Cvv(this.data.cardcv)
      con.cardLine(this.data.carda)
      con.cardcity(this.data.cardc)
      con.cardstate()
      con.cardzip(this.data.cardz)
      con.confirm()
      con.authorize()
      con.sendMail()
      con.email(this.data.emile)
      con.saveMail()
      con.sendeMail()
      con.downloadps()
      con.viewPystub()
      con.closeStub()
      con.Dashboard()

    })
})
