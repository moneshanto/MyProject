import LoginPage from "./LoginPage"

class Salaryemp extends LoginPage
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
   
    eSalaried()
    {
        cy.wait(3000)
        const sal=cy.get('#mat-button-toggle-1-button > .mat-button-toggle-label-content')
        sal.click()
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

       Wage(value)
       {
          cy.wait(2000)
          const fed=cy.get('#mat-input-9')
          fed.type(value)
          return this
       }
    

       withHolding(value)
       {
          cy.wait(2000)
          const wh=cy.get('#mat-input-10')
          wh.type(value)
          return this
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
          const sd2=cy.get('[aria-label="December 1, 2020"] > .mat-calendar-body-cell-content')
          sd2.click()
          cy.wait(2000)
          const pd=cy.get('#mat-input-13')
          pd.click()
          cy.wait(2000)
          const pd2=cy.get('[aria-label="December 10, 2020"] > .mat-calendar-body-cell-content')
          pd2.click()
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

   view()
   {
      cy.wait(5000)
      const vw=cy.get('.arrow > .material-icons')
      vw.click()
   }
   payStub()
   {
      cy.wait(10000)
      const ps=cy.get('.ml-3 > .btn')
      ps.click()
      cy.wait(5000)
   }

   close()
   {
      cy.wait(5000)
      const clo=cy.get('.close1 > span > .material-icons')
      clo.click()
   }

   CompleteOrder()
   {
      cy.wait(5000)
      const order=cy.get('.priview-btn > .btn > .mat-button-wrapper > span')
      order.click()
   }

   checkBox()
   {
      cy.wait(5000)
      const cb=cy.get('.mat-checkbox-inner-container')
      cb.click()
   }

   Accept()
   {
      cy.wait(5000)
      const ac=cy.get('.dialog-footer > .btn-primary > .mat-button-wrapper')
      ac.click()
   }

   cardName(value)
   {
      cy.wait(5000)
      const cnam=cy.get('#mat-input-41')
      cnam.type(value)
   }

   
   cardNumber(value)
   {
      cy.wait(5000)
      const num=cy.get('#mat-input-42')
      num.type(value)
   }

   month(value)
   {
      cy.wait(5000)
      const mn=cy.get('#mat-input-43')
      mn.type(value)
   }

   Cvv(value)
   {
      cy.wait(5000)
      const cv=cy.get('#mat-input-44')
      cv.type(value)
   }

   cardLine(value)
   {
      cy.wait(3000)
      const cardadd=cy.get('#Address1')
      cardadd.type(value)
      return this
   }
    
   cardcity(value)
   {
      cy.wait(3000)
      const cardcit=cy.get('#City')
      cardcit.type(value)
      return this

   }
    cardstate()
    {
      cy.wait(8000)
      const ck5=cy.get('.mat-select-placeholder')
      ck5.click()
      cy.wait(10000)
      const ck6=cy.get('#mat-option-577 > .mat-option-text')
      ck6.click()
    }

      cardzip(value)
      {
         cy.wait(2000)
         const empzip=cy.get('#mat-input-48')
         empzip.type(value)
         return this
      }

      confirm()
      {
         cy.wait(5000)
         const cf=cy.get('#mat-checkbox-11 > .mat-checkbox-layout > .mat-checkbox-inner-container')
         cf.click()
      }

      authorize()
      {
         cy.wait(5000)
         const ar=cy.get('.mat-button-wrapper > .ng-star-inserted')
         ar.click()
      }

      sendMail()
      {
         cy.wait(5000)
         const sm=cy.get('.text-right > :nth-child(1) > .btn')
         sm.click()  
      }

      email(value)
      {
         cy.wait(5000)
         const em=cy.get('#mat-input-49')
         em.type(value)
      }
        
      saveMail()
      {
         cy.wait(5000)
         const sv=cy.get('.mat-checkbox-inner-container')
         sv.click()  
      }
 
      sendeMail()
      {
         cy.wait(5000)
         const sem=cy.get('.ng-star-inserted > .btn > .mat-button-wrapper')
         sem.click()  
      }


      downloadps()
      {
         cy.wait(5000)
         const dps=cy.get(':nth-child(2) > img')
         dps.click()  
      }

      viewPystub()
      
         {
            cy.wait(5000)
            const vp=cy.get('.res-float-left > :nth-child(2) > :nth-child(1) > img')
            vp.click() 
            cy.wait(10000)
         } 

         closeStub()
         {
            cy.wait(10000)
            const cstub=cy.get('.close1 > span > .material-icons')
            cstub.click() 
         
         }

         Dashboard()
         {
            cy.wait(5000)
            const db=cy.get('.btn > .mat-button-wrapper')
            db.click() 
            
         }
        
}

export default Salaryemp




   


