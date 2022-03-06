// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import 'cypress-file-upload';

Cypress.Commands.add('login',(username,pasward)=>{
    cy.get('input[id="txtUsername"]').type(username)
    cy.get('div[id="divPassword"]').type(pasward)
    cy.get('input[id="btnLogin"]').click()
})


Cypress.Commands.add('Hotel_login',(username,password)=>{
    cy.visit('https://adactinhotelapp.com/')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#login').click()
    cy.get('#location').select('Sydney')
    cy.get('#hotels').select('Hotel Creek')
    cy.get('#room_type').select('Standard')
    cy.get('#room_nos').select('1')
    cy.get('#adult_room').select('2')
    cy.get('#child_room').select('1')

})

Cypress.Commands.add('getAndSetToken', () => {
    Cypress.log({
        message: 'Requests token and sets in local storage.',
        displayName: 'GetToken'
    });
    cy.request({
        url: 'https://conduit.productionready.io/api/users/login',
        method: 'POST',
        body: {
            user: {
                email,
                password
            }
        }
    }).then(response => {
        const token = response.body.user.token;
        localStorage.setItem('jwt', token);
    });
 })



 Cypress.Commands.add('set', (A,B) => {
    Cypress.log({
        message: 'Requests token and sets in local storage.',
        displayName: 'GetToken'
    });
    cy.request({
        url: 'https://conduit.productionready.io/api/users/login',
        method: 'POST',
        body: {
            "user": {
                "email":A,
                "password":B
            }
        }
    }).then(response => {
        const token = response.body.user.token;
        localStorage.setItem('jwt', token);
        cy.visit('https://react-redux.realworld.io/');
        cy.contains('ram').should('be.visible');


    });
 });


