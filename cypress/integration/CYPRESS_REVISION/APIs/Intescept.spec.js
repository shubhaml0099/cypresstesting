/// <reference types = "Cypress"/>

describe('validating API', () => {
    it('validating GET request by intercept', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('interce')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@interce').then((Response) => {
            // cy.log(Response)
            //cy.log(Response.response.body)
            expect(Response.response.body).to.have.property('body')
            expect(Response.response.body).to.have.keys(["name", "email", "id", "body"]) // ask about this assertion
        })
    })

    it('verify the POST request using cy.intercept', function () {

        // invoke --- method , its object -- property
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }).as('postComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        //cy.wait('@postComment').its('response.statusCode').should('be.oneOf', [200, 201])
        cy.wait('@postComment').then(function (responce) {
            //cy.log(response)
            cy.log(responce.response.body)
            // expect(request.method).to.eqls('POST')
            // expect(response.statusCode).to.eqls(201)
            cy.log(responce.response.body)
            expect(responce.response.body).to.have.keys(["name", "email", "id", "body"])
        })
    })

    /// mocking responce by stubing data 
    it.only('validating intercept by mocking data', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }, {
            body: {
                "postId": 1,
                "id": 1,
                "name": "shubham langote",
                "email": "shs@gmail.biz",
                "body": "Yogiraj yelpale, shubham langote ",
                "from": "pandharpur maharastra"
            }

        }).as('getreq')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getreq').then((rep) => {
            cy.log(rep)
            expect(rep.response.body).to.have.property('body',"Yogiraj yelpale, shubham langote ")
        })
    })


})