describe('check availability',()=>{
  it('check product is comming soon or not',()=>{
    cy.visit('https://www.flipkart.com/sony-cfi-1108a01-825-gb-astro-s-playroom/p/itmc724ceaaa3d5e')
    cy.get('[class="_16FRp0"]').should('have.text','Coming Soon')


  })
  it.only('check product is comming soon or not',()=>{
    cy.visit('https://www.flipkart.com/sony-cfi-1108a01-825-gb-astro-s-playroom/p/itmc724ceaaa3d5e')
    cy.get('[class="_30jeq3 _16Jk6d"]').then((value)=>{
         var rr = value.text()
     var rrr=Number(rr.replace(/₹|,/gi, ""))
      cy.wrap(rrr)
      cy.log(rrr)

      expect(rrr).to.be.lessThan(50000)
    })
   

  })
})