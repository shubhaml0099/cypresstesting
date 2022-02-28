/// < reference  types="cypress"/>

//  Day one lecture cypress lecture 

// install cypress command
// npm init   ==> 

// npm install npx

// npm install cypress

// npx cypress open

/*  for time out error

for timeout error ---> node_modules  --> cypress ---> lib ---> tasks ---> verify.js --->
 40 number line  ---> change wait here ---> 30000 to 100000  ---> save it and run it
*/

/// <reference types="cypress"/>

describe('Learn Automation', () => {
    it('test one', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'contactus')
        cy.url().then((responce) => {
            expect(responce).equals('http://webdriveruniversity.com/Contact-Us/contactus.html')
        })
    })
    it('test the application form', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Shubham')
        cy.get('[name="last_name"]').type('Langote')
        cy.get('[name="email"]').type('shubham@gmail.com')
        cy.get('[name="message"]').type('he! hello iam shubham')
        cy.get('[value="SUBMIT"]').click()
        cy.get('div[id="contact_reply"]').should('have.text', 'Thank You for your Message!')
    })
   it.only('use for each ',()=>{
       cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
       cy.get('[name="first_name"]').each((el)=>{
           cy.wrap(el).type('shubham')
       })
   })
})





//   shubhangi code
// describe('Learn Automation', () =>{
//     it.only('test case 1', () =>{
//         cy.visit('http://webdriveruniversity.com/');
//         cy.get('a[id="contact-us"]').invoke('removeAttr', 'target').click();
//         //implicite aasertion-> should
//         //explicite -> expect
//         cy.url().should('include', 'Contact-Us');
//         cy.url().then((url) =>{
//             expect(url).to.equal('http://webdriveruniversity.com/Contact-Us/contactus.html');
//         })

//     })
//     it('Test the application form', () => {
//         cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
//         cy.get('input[class="feedback-input"]').eq(0).type('Aayush');
//         cy.get('input[class="feedback-input"]').eq(1).type('Pawar');
//         cy.get('input[class="feedback-input"]').eq(2).type('minskole@gmail.com');
//         cy.get('textarea[name="message"]').type('We are learning Cypress');
//         cy.get('input[type="submit"]').click();
//         cy.get('div[id="contact_reply"] > h1').should('have.text','Thank You for your Message!');
//     })
//     it('use of each method',()=>{
//         cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
//         cy.get('input[class="feedback-input"]').each((element,index) =>{
//            cy.wrap(element).type('minskole')


//         })
//     })
// })


