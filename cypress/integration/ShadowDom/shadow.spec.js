describe('verify the shadow DOM element',function(){
    it.skip('verify the shadow DOM element text',function(){
        cy.visit('http://127.0.0.1:5501/index.html')
        cy.get('button').click()
        cy.wait(2000)
        cy.get('div#shadowHost').shadow().find('h2')
        cy.get('#name').type('hello')

    })

    it.skip('verify  the book app',function(){
        
        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('book-app').shadow()
        .find('app-toolbar')
        .find('input')
        .type('hello')
        
    })
    it.only('verify the shadow DOM element text',function(){
        cy.visit('http://127.0.0.1:5501/index.html')
        cy.get('button').click()
        cy.wait(2000)
        cy.get('div#shadowHost').find('h2')
        cy.get('#name').type('hello')

    })

    it('verify  the book app',function(){
        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('book-app')
        .find('app-toolbar')
        .find('input')
        .type('hello')
        
    })


})