
describe('Creat data on back end by POST API', function () {
    it('validat POST api', () => {
        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/users?page=2",
        }).then(res => {
            // cy.log(res)
            cy.writeFile('cypress/fixtures/writeAPIdata.json', res)
            expect(res.status).to.eql(200)
            expect(res.body.data.length).to.eql(6)
        })
        cy.fixture('writeAPIdata.json').then(el => {
            cy.log(el)
        })
    })

    // sit taken code 
    it('verify the writing to fixture file', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then(function (res) {
            cy.writeFile('cypress/fixtures/users3.json', res.body)
        })

        cy.fixture('users3').then(function (res) {
            expect(res.data.length).to.eqls(6)
        })

    })
})
