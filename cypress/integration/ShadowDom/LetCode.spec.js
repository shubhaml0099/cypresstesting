describe('shadow Dom handling',()=>{
    it('shadow DOM ',()=>{
        cy.visit('https://letcode.in/shadow')
        cy.contains('Enter your first name').click()
    })
})