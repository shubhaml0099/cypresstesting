// hit API by using fixture json data by passing  in body 

import data from '../../fixtures/API.json'
import dataA from '../../fixtures/API3.json'
describe('Creat data on back end by POST API', function () {
    it('validat POST api', () => {
        cy.request({
            method: 'POST',
            url: "https://reqres.in/api/users",
            body: data
        }).then(res => {
            cy.log(res)
            expect(res.status).to.eql(201)
        })
    })

    it('validat POST api', () => {
        cy.fixture('API2').then((el) => {
            cy.request({
                method: 'POST',
                url: "https://reqres.in/api/users",
                body: el
            }).then(res => {
                cy.log(res)
                expect(res.status).to.eql(201)
            })
        })

    })

    dataA.forEach(function (element, index) {

        it.only(`verify the usercreation with test-data ${index + 1}`, function () {

            cy.request({
                method: "POST",
                url: "https://reqres.in/api/users",
                body: element
            }).then(function (response) {
                cy.log(response.body)
                expect(response.status).to.eqls(201)
            })

        })



    })


})
