it("verify subtotal in cart", () => {
    cy.log(Cypress.env('devurl'))
  cy.visit(Cypress.env('devurl'))

    cy.get(tcObj.newArrel).each((el, i) => {
        cy.get(tcObj.newArrel).eq(i).click({ force: true })
        cy.get(tcObj.paraText).then(el => {
            let paraGrapText = el.text();
            cy.log(paraGrapText)
            if (paraGrapText.includes('in stock')) {
                cy.get(tcObj.addtoCartBtn).click()
                cy.get(tcObj.bookName).then(el => {
                    bookName = el.text();
                    cy.log(bookName)
                })
                cy.get(tcObj.book3price).first().then(el => {
                    book3Price = el.text();
                })
                cy.get('div.woocommerce-message').should('contain', ' “Mastering JavaScript” has been added to your basket.')
                // cy.get('div.woocommerce-message a').should('be.visible').click()

            }
            else {
                cy.go(-1)
            }

        })

    }).then(() => {
        
        cy.get('div.woocommerce-message a').should('be.visible').click()
        cy.get(tcObj.bkcartText).then(el => {
            cy.log(el.text())
            expect(el.text()).to.eqls(bookName)
        })
        cy.get('td.product-price span.woocommerce-Price-amount').then(el => {
            expect(el.text()).to.eq(book3Price)
            cy.log(el.text())
            cy.log(book3Price)
        })
        let qty = 2
        cy.get('input.input-text.qty').clear().type(qty)
        cy.get('input[value="Update Basket"]').click()
        var subTotal = (book3Price.replace('₹', '')) * qty;
        cy.wait(5000)
        cy.get('td[data-title="Subtotal"] span.woocommerce-Price-amount').then(el => {
            let subprs = el.text().replace('₹', '').replace('.00', '')
            expect(Number(subprs)).to.eq(subTotal)
        })
    })
})









it("Access environment varibles", () => {
    cy.log(Cypress.env('devurl'))
  cy.visit(Cypress.env('devurl'))  })









  //.its method   ->     
    it("its method", () => {
    // gives the value of the property

    cy.visit('http://practice.automationtesting.in/shop/')
    let ellen = cy.get('li.cat-item').its('length')
    
    ellen.then((len)=>{
        cy.log(len)
    })
    cy.get('li.cat-item').then((count)=>{
        cy.log(Cypress.$(count).length)
    })
  

})








