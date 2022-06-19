/// <reference types = "Cypress"/>


describe('validate reqress Api',()=>{
    
    it("Get all list",()=>{
      cy.request('GET','https://kitchen.applitools.com/api/recipes').then(response=>{
          cy.log(response)
          expect(response.status).to.eq(200)
          expect(response.statusText).to.eq('OK')
          cy.log(response.body.data)
          expect(response.body.data).to.have.length(5)
          expect(response.body.data[0]).to.have.property('id','hot-fried-chicken')
      })
    })
    it("Get single user",()=>{
        cy.request({
           method: 'GET',
           url: 'https://reqres.in/api/users/2',
           headers: {
            accept:'application.json'
        }
        }).then(response=>{
            cy.log(response)
            let body = response.body.data
            expect(response.status).to.eq(200)
            expect(body).to.have.property('id',2)
            expect(body).to.have.property('first_name','Janet')

        })
      })
})