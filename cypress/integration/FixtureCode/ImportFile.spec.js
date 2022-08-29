import data from '../../fixtures/fixture.json'
import info from '../../fixtures/example.json'
describe('validate fixture data ', function () {
    data.forEach((el, index) => {
        it(`validate data ${index + 1}`, () => {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('.feedback-input').eq(0).type(el.FirstName)
            cy.get('.feedback-input').eq(1).type(el.LastName)
            cy.get('.feedback-input').eq(2).type(el.Gmail)
            cy.get('.feedback-input').eq(3).type(el.comment)
            cy.get('[class="contact_button"]').eq(1).click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')

        })
    });
    it(`validate data `, () => {
        data.forEach((el, index) => {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('.feedback-input').eq(0).type(el.FirstName)
            cy.get('.feedback-input').eq(1).type(el.LastName)
            cy.get('.feedback-input').eq(2).type(el.Gmail)
            cy.get('.feedback-input').eq(3).type(el.comment)
            cy.get('[class="contact_button"]').eq(1).click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        });
    })

    it.only(`validate data `, () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('.feedback-input').eq(0).type(info.name)
        cy.get('.feedback-input').eq(1).type(info.comment)
        cy.get('.feedback-input').eq(2).type('shubh@gmail.com')
        cy.get('.feedback-input').eq(3).type('hellow i am shubham')
        cy.get('[class="contact_button"]').eq(1).click()
        cy.get('h1').should('have.text','Thank You for your Message!') 


    })
})