describe('using fixter data ', ()=> {
    before(()=> {
        cy.fixture('example.json').then(function(data){
            this.data = data
          //  cy.log(data)
        })
    })
    // NOTE ==> if we are using before block we need to use only function declioration for call back function
    it('fil forms', function(){

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('.feedback-input').eq(0).type(this.data.name)
        cy.get('.feedback-input').eq(1).type('Langote')
        cy.get('.feedback-input').eq(2).type('shubh@gmail.com')
        cy.get('.feedback-input').eq(3).type('hellow i am shubham')
        cy.get('[class="contact_button"]').eq(1).click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })


})