/// <reference  types = "Cypress"/>
describe('Validating the functionality of check box', () => {
    it('verify whether the single Radio Button is checked', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

        cy.get('form[id="radio-buttons"] input[type="radio"]').should('have.length', 5)
        cy.get('form[id="radio-buttons"] input[type="radio"]').eq(2).check()
        cy.get('form[id="radio-buttons"] input[type="radio"]').eq(2).should('have.value', 'yellow')
        cy.get('form[id="radio-buttons"] input[type="radio"]').eq(2).should('be.checked')
        // to avoid the repetations
        cy.get('form[id="radio-buttons"] input[type="radio"]').eq(2)
            .check()
            .should('be.checked')
            .and('have.value', 'yellow')

    })
    it('verify whether the single Radio button is unchecked', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // cy.get('form[id="radio-buttons"] input[type="radio"]').eq(2).check()
        // cy.get('form[id="radio-buttons"] input[type="radio"]').eq(1).should('not.be.checked')

       
        //verify all other radio buttons are unchecked except 3
        cy.get('form[id="radio-buttons"] input[type="radio"]').each((el,index)=>{
            cy.log(index)
            cy.get('form[id="radio-buttons"] input[type="radio"]').eq(index).check().should('be.checked')
        })
    })
    it('verify whether the single checkbox is checked', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
       cy.get('input[value="option-1"]').check().should('be.checked')
    })
    it('verify whether the all checkbox is checked', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
       cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('be.checked')
       cy.get('input[type="checkbox"]').uncheck(['option-1','option-2','option-3','option-4'])
       .should('not.be.checked')
    })
    it('verify whether the all checkbox is checked', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
       cy.get('input[type="checkbox"]').each((element,index)=>{
        cy.get('input[type="checkbox"]').eq(index).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(index).uncheck().should('not.be.checked')
       })
       
      
    })
    it('verify drop down', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('select[id="dropdowm-menu-1"]').select('c#').should('have.value','c#')
        cy.get('select[id="dropdowm-menu-1"]').select('python').should('have.value','python')
       })
})