describe('verify the drope down', () => {

  it(' to test that the dropdown with select ', () => {
    cy.visit('https://www.testingwithtechbrothers99.com/common-elements');
    //1st way
    cy.get('select[class="form-control"]')
      .first()
      .select('Option1')
      .should('have.value', '1')
    /////2nd way
    cy.get('select[class="form-control"]')
      .first()
      .select('1')
      .should('have.contain', 'Option1')
    cy.get('select[class="form-control"]').first().find('option').eq(1).then((el, i) => {
      var elText = el.text()
      cy.log(elText)
    })
  })
  it('to test dynamic dropDown', () => {
    cy.visit('https://paytm.com/train-tickets')
    cy.get('[data-reactid="164"] > ._2WNb > .fl-input-container > #text-box').clear().type('del')
    cy.get('div[class="16Y"]').find('._3ewH').find('div[class="_3sXO"]').each((el, index) => {
      let station = el.text()
      //cy.log(station)
      if (station == 'NZM - Hazrat Nizamuddin Delhi') {
        cy.wrap(el).click();
      }
    })

  })
  it.only('Test dynamic drop down',()=>{
    cy.visit('https://www.ebay.com/n/all-categories')
    cy.get('div[id="gh-cat-box"]').click()
    cy.get('select[aria-label="Select a category for search"]').each((el)=>{
      let selectValue = el.text()
      if(selectValue == 'Cameras & Photo'){
        cy.wrap(el).click('{force:true}')
        cy.get('input[id="gh-btn"]').click()
      }
      cy.get('span[class="b-pageheader__text"]').should('have.conten','Cameras & Photo')
     
    })
  })
})