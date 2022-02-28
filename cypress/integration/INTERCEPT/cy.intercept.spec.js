describe('verify the get request',()=>{
    it('verify the get request',()=>{
        cy.intercept({
            method:"Get",
            url:"https://jsonplaceholder.cypress.io/comments/1"

        }).then((Response)=>{
                return Response
        })
        cy.log(Response)
    })
})