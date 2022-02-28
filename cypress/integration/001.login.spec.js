describe('verify the login function',()=>{
    it('test login with valide credentials',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="txtUsername"]').type('admin')   //currect username 
        cy.get('input[name="txtPassword"]').type('admin123')  // currect pasward
       cy.get('input[type="submit"]').click()
        cy.get('input[id=MP_link]').should('be.visible')
        
    })
    it ('test login with invalid credential',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="txtUsername"]').type('admin')
        cy.get('input[name="txtPassword"]').type('admin23') // wrong pasward
        cy.get('input[type="submit"]').click()
        cy.get('input[name="txtUsername"]').should('be.visible')
         
    })
    it('test login with invalid credential',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('shubham')  //wrong username
        cy.get('input[type="password"]').type('admin123')  // currect pasward
        cy.get('input[class="button"]').click()
        cy.get('span[id="spanMessage"]').should('be.visible')
    })
    it('test login with invalid credential',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('shubham')    // wrong username 
        cy.get('input[type="password"]').type('sunnn123')    // wrong pasward
        cy.get('input[class="button"]').click()
        cy.get('span[id="spanMessage"]').should('be.visible')
    })  
})

