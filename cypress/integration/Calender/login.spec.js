import {Utility} from '../support/utility'

describe('verify the login',function(){

    // it('verify orange hrm login',()=>{
    //     cy.visit('/')
    // })

    it('verify orange hrm login',()=>{
        let url = Cypress.config().baseUrl  
        cy.visit(url) 
        cy.log(Cypress.config().username)
    })

    it('verify orange hrm login',()=>{
        let n = new Utility()
        let url = n.getBaseUrl()
        cy.visit(url) 
        cy.log(Cypress.env('username'))
        cy.log(Cypress.env('password'))

        
    
    })



})



