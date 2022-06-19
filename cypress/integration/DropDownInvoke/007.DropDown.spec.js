
// discribe and verify drop down functionality 



describe('describe and verify drop down function ',()=>{

    it('verify function',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('c#').should('have.value','c#')
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value','testng')
        cy.get('#dropdowm-menu-3').select('css').should('have.value','css')
    })

})

describe('describe and verify multiple drop down function ',()=>{

//let Selection = ["SQL","TestNG","CSS"]
let Selection = ["sql","testng","css"]

    it('verify multiple function',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('.section-title').first().children().each(function(el,index){
           cy.wrap(el).select(Selection[index]).should('have.value',Selection[index])
        })
    })

    it.only('verify the weather elements is enable or deseble',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //cy.get('#radio-buttons-selected-disabled').children().last().should('be.enabled')
        //cy.get('#radio-buttons-selected-disabled').children().first().should('be.enabled')
        cy.get('input[value="cabbage"]').should('be.disabled')

    })
    it.only('verify the current URL',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.url().should('contain','RadioButtons')
    })

    it.only('verify the title',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.title().should('contain','Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')
    })
    // it.only('verify the title',()=>{
    //     cy.visit('https://dhanwantari.com/Website/index.html')
    //     cy.title().should('contain','Organic Farming')
    // })


})
//cy.wrap(el).select(selectedValues[index]).should('have.value',selectedValues[index])




// it('verify whether the element is enabled or disabled',()=>{
//     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     cy.get('input[value="cabbage"]').should('be.disabled')
// })


// it('verify whether the element is enabled or disabled',()=>{
//     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     cy.get('input[value="cabbage"]').should('be.disabled')
//     cy.get('input[value="lettuce"]').should('be.enabled')
// })


// it.only('verify  the current url ',()=>{
//     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     cy.url().should('contain','Checkboxes')

// })

// it('verify  the title',()=>{
//     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     cy.title().should('include','WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')

// })







