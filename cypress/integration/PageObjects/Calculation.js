import LoginPage from "./LoginPage"

class Calculation extends LoginPage
{
    companyName(value)
   {
      cy.wait(5000)
    const cname=cy.get('#mat-input-7')
    
    cname.type(value)
    return this
   }

   EIN(value)
   {
      cy.wait(3000)  
    const ein=cy.get('#mat-input-2')
    ein.clear()
    ein.type(value)
    return this
   }

   cAdd()
   {

    cy.wait(3000)
    const cadd1=cy.get('#mat-input-8')
    cadd1.click()
   }

   cadd2(value)
   {

      cy.wait(3000)
      const caddr=cy.get('#address1')
      caddr.type(value)
      return this
   }
   
   ccity(value)
   {

      cy.wait(3000)
    const comcity=cy.get('#city')
    comcity.type(value)
    return this
   }
    
   cstate()
   {

      cy.wait(3000)
      const ck=cy.get('#mat-select-7 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder')
      ck.click()
   }

   cstate2()
   {
      cy.wait(3000)
      const ck1=cy.get('#mat-option-151 > .mat-option-text')
      ck1.click()
   }
    
    czip(value)
    {
      cy.wait(3000)
      const zip=cy.get('#zipcode')
      zip.type(value)
      return this

    }

    ccon()
    {
      cy.wait(3000)
      const addbtn=cy.get('#continueBtn > .mat-button-wrapper')
      addbtn.click()
    }
   

   employeeInfo(value)
   {
      cy.wait(3000)
      const empname=cy.get('#mat-input-3')
      empname.type(value)
      return this
   }
   SSN(value)
   {
      cy.wait(3000)
      const empssn=cy.get('#mat-input-5')
      empssn.type(value)
      return this
   }
  
   empAddress()
   {  
      cy.wait(3000)
      const empadd=cy.get('#mat-input-6')
      empadd.click()
   }
    
   eLine(value)
   {
      cy.wait(3000)
      const empadd2=cy.get('#address1')
      empadd2.type(value)
      return this
   }
    
   ecity(value)
   {
      cy.wait(3000)
      const empcity=cy.get('#city')
      empcity.type(value)
      return this

   }
    estate()
    {
      cy.wait(8000)
      const ck3=cy.get('#mat-select-8 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder')
      ck3.click()
      cy.wait(10000)
      const ck4=cy.get('#mat-option-209')
      ck4.click()
    }
      ezip(value)
      {
         cy.wait(2000)
         const empzip=cy.get('#zipcode')
         empzip.type(value)
         return this
      }

      esbt()
      {
         cy.wait(2000)
         const sbmt=cy.get('#continueBtn > .mat-button-wrapper')
         sbmt.click()
      }

   Wagecal(value)
   {
      cy.wait(2000)
      const fed=cy.get('#mat-input-9')
      fed.type(value)
      return this
   }

   Compensation()
   {
    cy.wait(2000)
    const comp1=cy.get('#mat-select-1 > .mat-select-trigger > .mat-select-value')
    comp1.click()
    cy.wait(2000)
    const comp2=cy.get('#mat-option-25 > .mat-option-text')
    comp2.click()
   }

   earningStatement()
   {
      cy.wait(5000)
      const ps=cy.get('.mat-select-placeholder')
      ps.click()
      cy.wait(2000)
      const ps2=cy.get('#mat-option-53')
      ps2.click()
      cy.wait(2000)
      const sd=cy.get('#mat-input-11')
      sd.click()
      cy.wait(2000)
      const sd2=cy.get('[aria-label="January 1, 2021"] > .mat-calendar-body-cell-content')
      sd2.click()
      cy.wait(2000)
      const pd=cy.get('#mat-input-13')
      pd.click()
      cy.wait(2000)
      const pd2=cy.get('[aria-label="January 7, 2021"] > .mat-calendar-body-cell-content')
      pd2.click()
   }

   units(value)
   {
      cy.wait(2000)
      const un=cy.get('#mat-input-16')
      un.type('40')
      return this
   }

   Calculate()
   {
      cy.wait(3000)
      const calc=cy.get('#btnCalculateTax > .mat-button-wrapper')
      calc.click()
   }

   previewPaystub()
   {
      cy.wait(5000)
      const ps=cy.get('#btnSaveTax > .mat-button-wrapper')
      ps.click()
   }

   Addps()
   {
    {
        cy.wait(5000)
        const aps=cy.get('.mb-1 > .btn > .mat-button-wrapper > :nth-child(1)')
        aps.click()
     }

     Companyselect()
     {
        cy.wait(5000)
        const compsel1=cy.get('#mat-select-17 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder')
        compsel1.click()
        cy.wait(5000)
        const compsel2=cy.get('#mat-option-358 > .mat-option-text')
        compsel2.click()

     }

     Newaddress()
     {
        cy.wait(5000)
        const newadd1=cy.get('.mat-select-value-text > .ng-tns-c13-111')
        newadd1.click()
        cy.wait(5000)
        const newadd2=cy.get('#mat-option-360 > .mat-option-text')
        newadd2.click()
     }

     NCeLine(value)
   {
      cy.wait(3000)
      const empadd2=cy.get('#address1')
      empadd2.type(value)
      return this
   }
    
   Ncity(value)
   {
      cy.wait(3000)
      const empcity=cy.get('#city')
      empcity.type(value)
      return this

   }
    NCstate()
    {
      cy.wait(8000)
      const ck3=cy.get('#mat-select-8 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder')
      ck3.click()
      cy.wait(10000)
      const ck4=cy.get('#mat-option-209')
      ck4.click()
    }
      ezip(value)
      {
         cy.wait(2000)
         const empzip=cy.get('#zipcode')
         empzip.type(value)
         return this
      }

      esbt()
      {
         cy.wait(2000)
         const sbmt=cy.get('#continueBtn > .mat-button-wrapper')
         sbmt.click()
      }


   }
}

export default Calculation