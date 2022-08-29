// by using befor hooks
// by using befor Each 
// by using .js file

import {names} from "../../fixtures/data.json"
import {info,info2} from "../../fixtures/data"

describe('using fixture folder fill forms', () => {
    let data
    before(()=>{
        cy.fixture("data").then((res)=>{
         data = res
        })
    })

    // before(() => {
    //     cy.fixture("user").then((data) => {
    //         this.data = data
    //     })
    // })

    it('fil forms',()=>{
       // cy.log(this.data)
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('.feedback-input').eq(0).type(data.FirstName)
        cy.get('.feedback-input').eq(1).type('Langote')
        cy.get('.feedback-input').eq(2).type('shubh@gmail.com')
        cy.get('.feedback-input').eq(3).type('hellow i am shubham')
        cy.get('[class="contact_button"]').eq(1).click()
        cy.get('h1').should('have.text','Thank You for your Message!') 


    })
    it('fil forms',()=>{
        cy.fixture("data").then((res)=>{

        //cy.log(this.data)
         cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
         cy.get('.feedback-input').eq(0).type(res.FirstName)
         cy.get('.feedback-input').eq(1).type('Langote')
         cy.get('.feedback-input').eq(2).type('shubh@gmail.com')
         cy.get('.feedback-input').eq(3).type('hellow i am shubham')
         cy.get('[class="contact_button"]').eq(1).click()
         cy.get('h1').should('have.text','Thank You for your Message!') 

        })


     })
    data.forEach(element => {
        it('fil forms', () => {

            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('.feedback-input').eq(0).type(element.FirstName)
            cy.get('.feedback-input').eq(1).type('Langote')
            cy.get('.feedback-input').eq(2).type('shubh@gmail.com')
            cy.get('.feedback-input').eq(3).type('hellow i am shubham')
            cy.get('[class="contact_button"]').eq(1).click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')

        })


    })






})