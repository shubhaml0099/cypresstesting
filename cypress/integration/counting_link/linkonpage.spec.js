describe('link on page ',()=>{
    it.only('counting any page numbers of link available',()=>{
        cy.visit('https://www.amazon.in')
        cy.get('a').each((el,index,arr)=>{
            // const count = arr.length
            // cy.log(count)
            return arr
        }).then((arr)=>{
            cy.log(arr)
        })
    })
    it('verify the no. of links ', () => {
        cy.visit("https://www.google.co.in/webhp?hl=en&sa=X&ved=0ahUKEwi5pMfR9Zv4AhWHNZQKHa7YCuk4ChA8CAg")
        //  cy.get('.gLFyf').type('Cypress{enter}')
        //    let a=[]
        cy.get(".gLFyf.gsfi").type('Cypress{enter}')
        cy.get('a').each((el, index, arr) => {
            // cy.log(el)
            //cy.log(el.prop('href'))                           //////print links
            // a.push(el.prop('href').length)
            // cy.log(arr.length)
            return arr
        }).then((arr)=>{
            cy.log(arr.length)                                           /////counting no of links
            
        })

    })
})