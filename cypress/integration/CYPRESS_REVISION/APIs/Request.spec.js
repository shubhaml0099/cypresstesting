/// <reference types = "Cypress"/>

// Automating Api 

describe('Validating API request',()=>{
    it('validating GET request',()=>{
      cy.request({
          method:'GET',
          url:"https://reqres.in/api/users?page=2"
      }).then((res)=>{
     //  cy.log(res.body.data)
     expect(res.status).to.eq(200)
     expect(res.statusText).to.eq('OK')
     expect(res.body.data.length).to.eq(6)
     expect(res.body).to.have.property('per_page')
      return res.body.data
        }).then((Response)=>{
            cy.log(Response)
        expect(Response[2]).to.have.haveOwnProperty('first_name',"Tobias")
        expect(Response[0]).to.have.property('id',7)
        })
    })
    it('validating POST request',()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{name: "morpheus", job: "leader"},

        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(201)
            expect(res.statusText).to.eq('Created')
            expect(res.body).to.have.property('job','leader')
        })
    })
    it('validate PUT request',()=>{
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/2",
            Body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then((resp)=>{
            cy.log(resp)
        })
    })
})


