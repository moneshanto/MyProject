/// <reference types="Cypress" />

//const { should } = require("chai");

describe("first test in cypress", function() 
 {
    it("should visit Home Page", function()  
    {
        cy.visit("https://secureeps.payrollspan.net/");
    });
    it("should login", function()  
    {
        cy.get('#btnSignIn').click()
        cy.get('#mat-dialog-title-0').contains('Sign in to your 123PayStubs account')
        cy.wait(5000)
        cy.get('#emailaddress').type('monesh+a1@spanllc.com')
        cy.get('#password').type('Span@123')
        cy.get('.mat-icon').click()
        cy.get('#popupsignIn').click()
       });
    });     
      
