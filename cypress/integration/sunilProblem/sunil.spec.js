




describe('verify opencart',()=>{
    it('verify with valid credentials',()=>{
        cy.visit('https://www.opencart.com/index.php?route=account/login')
        cy.get('#input-email').type('sunilcy10@gmail.com')
        cy.get('#input-password').type('123456789')
        cy.get('#account-login > div.container > div > div:nth-child(1) > form > div.row > div:nth-child(1) > button.btn.btn-primary.btn-lg.hidden-xs').click({force:true})
        cy.get('#input-pin').type('7373')
        cy.get('form > :nth-child(2) > .btn').click()
        //cy.url().should('eq', 'https://www.opencart.com/index.php?') 
        cy.url().should('include', 'https://www.opencart.com/index.php?route=account/account&member')
        //cy.wait(30000)
        //cy.get(div[id="short-cut"]).should('contain','Account')
    })
    // it('verify with invalid credentials',()=>{
    //     cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials')
    //     cy.get('#txtUsername').type('Admin')
    //     cy.get('#txtPassword').type('admin')
    //     cy.get('#btnLogin').click()
    //     cy.get('#spanMessage').should('have.text','Invalid credentials')
    // })
})