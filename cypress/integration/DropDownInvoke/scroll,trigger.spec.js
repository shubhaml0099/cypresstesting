
// scrollIntoView()  // dblclick()  // 


describe ('varify the functionality scrollintoview ',()=>{
    it('varify the scroll',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#scrolling-around').scrollIntoView().invoke('removeAttr','target').click()
           cy.url().should('include','index.html')
    })
    it('verify the functionality for drag and drop',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove')
        .trigger('mouseup',{force: true})
        cy.get('#droppable').find('p').find('b').should('have.text','Dropped!')

    })
    it.only('varify the dbclick',()=>{
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').dblclick().should('have.class','div-double-click double')

    })
})