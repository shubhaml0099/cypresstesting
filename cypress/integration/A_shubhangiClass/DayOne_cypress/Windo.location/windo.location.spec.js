describe('commands',()=>{
    it('cy.document',()=>{
       cy.visit('http://practice.automationtesting.in/')
       cy.document().then(doc=>{
           cy.log(doc)
          expect(doc.title).to.eq('Automation Practice Site')


       })
    })

          // by using this cy.windows().location.href we can replace href value and new window openig controled 

    it('cy.window',()=>{
        cy.visit('http://practice.automationtesting.in/')
        cy.window().then(win=>{
            cy.log(win.location)
            expect(win.location.href).to.eq('http://practice.automationtesting.in/')
            let newUrl = "https://twitter.com/krishnasakinala"
            win.location.href = newUrl
            cy.url().should('eq',"https://twitter.com/krishnasakinala")
        })
     })
     it.skip('hash commnad',()=>{
         cy.visit('https://mail.google.com/mail/')
         //log in to ur gmail
         cy.hash().should('eq','#inbox')
     })
})



describe('comands ', () => {

    it('cy.documents', () => {
        cy.document().then((res) => {
            console.log(res)
            expect(res.title).to.eq('')

        })
    })
    it('cy.window', () => {
        cy.window().then((res) => {
            console.log(res.location)
            //expect(res.location.href).to.eq('http://practice.automationtesting.in/')
        })

    })
})