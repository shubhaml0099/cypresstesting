

// validating  amazon use name 


describe('validating amazon login ',()=>{
    beforeEach('visit page ',()=>{
        cy.visit('https://www.amazon.in/')
    })
    it('validating ligin ',()=>{
       // cy.visit('https://www.amazon.in/')
        cy.get('[id="nav-tools"]>a').eq(2).click()
        cy.get('[type="email"]').clear().type('shubhamlangote0099@gmail.com')
        cy.get('input[id="continue"]').click()
        cy.get('[type="password"]').clear().type('   ')
        cy.get('#signInSubmit').click()
        cy.get('#nav-link-accountList-nav-line-1').should('have.text','Hello, shubhamlangote')
    })
     it.only('serch product ',()=>{
        cy.visit('https://www.amazon.in/s?k=mobile&crid=L3O5RA7XMMS7&sprefix=mobile%2Caps%2C776&ref=nb_sb_noss_1')
      cy.get('input[type="text"]').first().type('vivo mobile')
      cy.get('#nav-search-submit-button').click()
     })
})
