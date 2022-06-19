
describe('intercept mocking by fixture file ', () => {
    before('fixture folder data', () => {
        cy.fixture('apimocking').then((el) => {
            cy.log(el)
        })
    })
    it('intercept', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).as('GET')
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.get('a[href="/posts"]').first().click()
        cy.wait('@GET').then((el) => {
            cy.log(el.response.body)
            expect(el.response.body).to.have.property('length', 100)
            expect(el.response.body[0]).to.have.property('title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')

        })
    })
    it.only('verify the user per request', function () {
        cy.intercept({
            method: 'GET',
            url: "https://jsonplaceholder.typicode.com/posts"

        }).as('getUser')

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.get('a[href="/posts"]').first().click()
        cy.wait('@getUser').then(function ({ request, response }) {
            expect(response.statusCode).to.eq(200)
            expect(response.body).to.have.length(100)
        })

    })
    it.only('verify the user per request', function () {

        cy.intercept({
            method: 'GET',
            url: "https://jsonplaceholder.typicode.com/posts"

        }, {
            fullName: 'chinmay'
        }).as('getUser')

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.get('a[href="/posts"]').first().click()
        cy.wait('@getUser').then(function ({ request, response }) {
            expect(response.statusCode).to.eq(200)
            //expect(response.body).to.property('fullName','chinmay')
        })



    })
})