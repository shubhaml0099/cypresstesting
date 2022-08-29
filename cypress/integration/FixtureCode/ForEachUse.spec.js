import {valu1,valu2} from "../../fixtures/data.json"
describe('verify the fixture topic in js', function () {
        // by using multiple data in singal it block 
    it('verify the fixture', function () {
        valu1.forEach(function (el) {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('.feedback-input').eq(0).type(el.FirstName)
            cy.get('.feedback-input').eq(1).type('Langote')
            cy.get('.feedback-input').eq(2).type('shubh@gmail.com')
            cy.get('.feedback-input').eq(3).type('hellow i am shubham')
            cy.get('[class="contact_button"]').eq(1).click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')

        })

    })

    // by using multiple data in singal it block another way
    valu2.forEach(function (el,index) {
    it(`verify the fixture${index+1}`, function () {
       
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('.feedback-input').eq(0).type(el.FirstName)
            cy.get('.feedback-input').eq(1).type('Langote')
            cy.get('.feedback-input').eq(2).type('shubh@gmail.com')
            cy.get('.feedback-input').eq(3).type('hellow i am shubham')
            cy.get('[class="contact_button"]').eq(1).click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')

        })

    })

})
