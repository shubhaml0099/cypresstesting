it('validate api response with UI', ()=>{
    cy.visit('https://kitchen.applitools.com/ingredients/api')
    cy.request('https://kitchen.applitools.com/api/recipes').then(response=>{
        cy.log(response)
       
        let uiLen = Cypress.$('ul#recipes-list li').length
        cy.log(uiLen)  // 5
        cy.log(response.body.data.length)  //5
        expect(uiLen).to.eq(response.body.data.length)
        cy.get('h4.chakra-heading').first().should('have.text',response.body.data[0].title)
        cy.get('ul#recipes-list li').eq(0).find('img')
        .should('have.attr','src',response.body.data[0].image)
    })
})