
// hook methods in cypress //

describe('test cases',()=>{
    before(function(){
        cy.log('befor it block ')
    })
    beforeEach(function(){
        cy.log('before each it block ')
    })
    afterEach(function(){
        cy.log('after each it block ')
    })
    after(function(){
        cy.log('after it block')
    })

    it('test one',()=>{
        cy.log('test one complit ')
    })
    it('test two ',()=>{
        cy.log('test two complit')
    })
})