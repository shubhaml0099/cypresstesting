
/// <reference types="cypress" />
describe('verify the API request', () => {

    it('Verify the GET request for list of user page wise', () => {
        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/users?page=2"
        })
            .then(function (response) {

                cy.log(response)
                expect(response.status).to.eq(200)
                expect(response.body.per_page).to.eq(response.body.data.length)
            })

    })


    it('Verify the GET request for list of user page wise', () => {
        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/users?page=2"
        })
            .then(function (response) {
                //    response.body.data.forEach(element => {
                //        expect(element).to.have.property('email')
                //        expect(element).to.have.property('id')
                //        expect(element).to.have.property('first_name')
                //        expect(element).to.have.property('last_name')
                //        expect(element).to.have.property('avatar')
                //    });

                response.body.data.forEach(element => {
                        expect(element).to.have.all.keys("email","id","first_name","last_name","avatar")
                });

            })

    })

    
    it('Verify the POST', () => {
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(response){
            //cy.log(response.body.id)
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
        })


    })

    it('Verify the PUT', () => {
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function(response){
            //cy.log(response.body.id)
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('updatedAt')
        })


    })

    it('Verify the Delete API', () => {
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2",
          
        }).then(function(response){
            //cy.log(response.body.id)
            expect(response.status).to.eq(204)
            
        })


    })


})