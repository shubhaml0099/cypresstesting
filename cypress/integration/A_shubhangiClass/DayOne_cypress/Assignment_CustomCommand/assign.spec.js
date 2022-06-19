

// Assignment given by shubhangi madam 
// write code by using Custome comand --->> customecommand mins the command which is writen 
//                                                    in folder  >>> cypress-->support-->commands.js
// custome command call by function name  

//username- aayushpawar
//password- Test@12

describe('To Verify Valide Login',()=>{
    it('lunch hotel resrvation by url',()=>{
        cy.visit('https://adactinhotelapp.com/')
        cy.get('#username').type('shubhamlangote')
        cy.get('#password').type('cypress413304')
        cy.get('#login').click()
        cy.get('.login_title').should('have.text','Search Hotel (Fields marked with Red asterix (*) are mandatory)')
    })
})

