
describe('validating radio button ',()=>{
    it('check radio button ',()=>{
        cy.visit('https://paytm.com/train-tickets')
        cy.get('a[href="/train-tickets"]').click()
        cy.get('[id="pnrPage"]').click({force: true}).should('be.checked')
    })
})


// Iam shubham langote i am working as test engineer in Emergica Multitrade pvt ltd company in pune  