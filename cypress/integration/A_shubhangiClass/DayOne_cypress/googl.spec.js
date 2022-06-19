




describe('search amazon.com',()=>{
    it('amazon ',()=>{
        cy.visit('https://www.google.co.in/')
        cy.get('[class="gLFyf gsfi"]').type('Amazon {Enter}')
        cy.get('h3[class="LC20lb MBeuO DKV0Md"]').first().click()

    })
})                                