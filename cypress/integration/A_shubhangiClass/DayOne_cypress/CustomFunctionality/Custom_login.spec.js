
// login by using custome command 
// custome cummand mins the command which is used for each it block then we custome this code in support folder> command.js file 
// at the time of use we call custome command line 


describe('login functionality',()=>{
    it('verify the login by using custome command',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')  
        cy.login('Admin','admin123')
        cy.get('span[id="spanMessage"]').should('contain.text','')
    })
    it.only('verify the login again',()=>{
        cy.login('Admin','admin123')
    })
})