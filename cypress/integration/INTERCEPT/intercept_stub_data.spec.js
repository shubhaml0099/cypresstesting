describe('verify the intercept concept', () => {
    it.only('verify the get request', () => {

        cy.fixture('intercept').then((res) => {
            res.forEach(element => {
                cy.intercept({
                    method: "GET",
                    url: "https://jsonplaceholder.cypress.io/comments/1",

                }, {
                    body: element
                }).as('getRequest')
                cy.visit('https://example.cypress.io/commands/network-requests')
                cy.contains('Get Comment').click()
                cy.wait('@getRequest').then(({ response, request }) => {
                    cy.log(response.body)
                    // expect(response.statusCode).to.equal(200)
                    cy.get('.network-comment').should('have.text', response.body.body)
                })

            })


        });


    })

    it('verify the POST request', () => {

        // request // response
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }, {
            statusCode: 201
        }).as('postRequest')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postRequest').then(({ response }) => {

            expect(response.statusCode).to.equal(201)
            cy.get('.network-post-comment').should('be.visible')

        })


    })



    it('verify the POST request', () => {

        // request // response
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }, {
            statusCode: 401
        }).as('postRequest')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postRequest').then(() => {
            cy.get('.network-post-comment').should('not.be.visible')
        })

    })


}) 