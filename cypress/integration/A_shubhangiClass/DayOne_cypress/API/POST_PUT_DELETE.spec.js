/// <reference types = "Cypress"/>


describe('validate reqress Api', () => {

    it("POST-Creat a user ", () => {
        cy.request('POST', 'https://reqres.in/api/users', {
            "name": "Aayush",
            "job": "Collector"
        }).then(Response=>{
            cy.log(Response)
            expect(Response.status).to.eq(201)
            expect(Response.statusText).to.eq('Created')
            expect(Response.body).to.have.property('name','Aayush')
            expect(Response.body).to.have.property('job','Collector')
        })
    })
    it('Another Way to validate post request response', ()=>{
        cy.request({
            method: "Post",
            url:"https://reqres.in/api/users",
            body:{
                name:"Minskole",
                job:"Developer"
            },
            heraders:{
                content_type:"application/xml"
            }

        }).then((response)=>{
            cy.log(response)
            expect(response.body).to.have.property('name','Minskole')
            expect(response.body).to.have.property('job','Developer')
            expect(response.body).to.have.property('id')
            expect(response.status).to.equals(201)
            expect(response.headers).to.have.property('content-type')
        })
    })
    it('PUT- update the expected perticular user', ()=>{
        cy.request('PUT','https://reqres.in/api/users/5',{
            
            "email": "minskole@reqres.in",
            "first_name": "aayush",
            "last_name": "pawar",
            
        }).then(response=>{
            cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('first_name','aayush')
            expect(response.body).to.have.property('last_name','pawar')
            expect(response.body).to.have.property('email','minskole@reqres.in')
        })
    })
    it('PUT- upadate expected by perticular user by another way',()=>{
        cy.request({
            method:'PUT',
            url:'https://jsonplaceholder.cypress.io/comments/1',
            body:{"name": "Using PUT in cy.intercept()",
            "email": "hello@cypress.io",
            "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"}
        }).then((response)=>{
                cy.log(response)
                expect(response.body.email).to.eq("hello@cypress.io")

        })
    })
    it('DELETE- DELETE the expected perticular user', ()=>{
        cy.request('DELETE','https://reqres.in/api/users/5').then(response=>{
            cy.log(response)
            expect(response.status).to.eq(204)
            expect(response.statusText).to.eq("No Content")
            expect(response.body).to.empty
        })
    })
})