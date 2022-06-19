/// <reference types = "cypress"/>

describe('env',()=>{
    cy.on('uncaught:exception',()=>{
        return false
    })
    it('env',()=>{
        cy.visit(Cypress.env('URL'))
        cy.log(Cypress.env('name'))
        cy.log(Cypress.env('yogi'))

    })
})