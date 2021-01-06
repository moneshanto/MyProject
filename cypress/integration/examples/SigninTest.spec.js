/// <reference types="Cypress" />

import Signin from "../PageObjects/Signin"

describe("login the application", function()
{



    it("Call the browser", function()
    {

        const brow = new Signin()
        brow.Browser()
    })

    it("login with credentials", function()
    {

        const si = new Signin()
        si.sinIn()
        si.emAddress("monesh+cypress20@spanllc.com")
        si.pWord("Span@123")
        si.signinbtn()
    })

})