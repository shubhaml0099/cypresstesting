
//intercept
    // element not loaded --
    // we can wait for particular request to be completed
    // cy.intercept(), can be used to  test response and request for XHR request
    // stubig 


    // cy.intercept ==>  can do  1>Responce validate  2>Dynamic wait  3>Stubing data / Moking  
    // cy.request ==>can do 1>Responce validate 
describe('verify all example with use of intercept', () => {
    it.only('validateing GET intercept', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('Get Comment1')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@Get Comment1')
        cy.get('@Get Comment1').then((res) => {
            cy.log(res)
            expect(res.request.body).to.eq("")
            expect(res.response.url).to.eq("https://jsonplaceholder.cypress.io/comments/1")
            expect(res.response.body).to.have.all.keys('body','email','id','name','postId')
        })

    })
    it('validating POST intercept',()=>{
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('Post Comment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@Post Comment').then((res2)=>{
            cy.log(res2)
            expect(res2.response.body.body).to.eq("You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE")
            //expect(res2.id).to.eq("interceptedRequest126")
        })
    })
    it('validate the PUT intercept',()=>{
        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('Update Comment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@Update Comment').then((res3)=>{
            cy.log(res3)
            expect(res3.request.method).to.eq("PUT")
            expect(res3.response.body).to.have.all.keys('body','email','id','name')
        })
    })

})

