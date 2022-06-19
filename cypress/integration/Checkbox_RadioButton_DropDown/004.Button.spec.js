
// checkbox , radio button ,dropdown list

describe('verify function of radio button,check box and dropdown list',()=>{
    beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    })

    it('verify functionality of checkbox with one select',()=>{
        cy.get('input[type="checkbox"]').first().check().should('be.checked')
        cy.wait(4000)
        cy.get('input[type="checkbox"]').first().uncheck().should('not.be.checked')
    })
    it('verify functionality of checkbox with multi selector',()=>{
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('be.checked')
        cy.wait(4000)
        cy.get('input[type="checkbox"]').uncheck(['option-1','option-2','option-3','option-4']).should('not.be.checked')

    })
    it('verify functionality of checkbox with',()=>{
        cy.get('input[type="checkbox"]').eq(2).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(2).click().should('not.be.checked')

    })

//  radio button 
// ----------------->>>-------------------------------------->>>--------------------------

    it.only('verify the functionality of radio button by .click() command',()=>{
        cy.get('input[type="radio"]').first().click().should('be.checked')
    })
    it.only('verify the functionality of radio button by check()',()=>{
        cy.get('input[value="yellow"]').check().should('be.checked')
        cy.wait(2000)
        cy.get('input[value="orange"]').should('not.be.checked')

    })
    
})















// describe('verify the functionality of radio button,checkbox and dropdown list',()=>{


//     beforeEach(function(){
//         cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     })

//     it('verify the functionality of checkbox with one select',()=>{
//         cy.get('input[type="checkbox"]').first().check().should('be.checked')
//         cy.wait(5000)
//         cy.get('input[type="checkbox"]').first().uncheck().should('not.be.checked')
//         //cy.get('input[type="checkbox"]').first().click().should('be.checked')
//     })
//     it('verify the functionality of checkbox with multiple select',()=>{
//         cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('be.checked')
//         cy.get('input[type="checkbox"]').uncheck(['option-1','option-2','option-3','option-4']).should('not.be.checked')

//     })

//     it('verify the functionality of checkbox with check',()=>{
//         // Difference with check and uncheck
//         cy.get('input[type="checkbox"]').eq(2).click().should('not.be.checked')
//         cy.get('input[type="checkbox"]').eq(2).click().should('be.checked')

//     })


//     it.only('verify the functionality of radio button -clcik() function',()=>{

//         // Difference with check and uncheck
//         cy.get('input[value="green"]').click().should('be.checked')
//         cy.get('input[value="blue"]').should('not.be.checked')


//     })

//     it.only('verify the functionality of radio button -check function ',()=>{

//         // Difference with check and uncheck
//         cy.get('input[value="green"]').check().should('be.checked')
//         cy.get('input[value="blue"]').should('not.be.checked')

//     })

// }) 